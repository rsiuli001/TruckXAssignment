import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CommentList from '../components/CommentList';
import color from '../data/color';
import { useAppSelector } from '../hooks/redux';
import { MainStackParams } from '../navigation/mainStack';

interface PostDetailsScreenProps
  extends NativeStackScreenProps<MainStackParams, 'PostDetailsScreen'> {}

const PostDetailsScreen: FC<PostDetailsScreenProps> = ({ navigation, route }): JSX.Element => {
  const post = useAppSelector(state =>
    state.posts.posts.filter(post => post.data.id === route.params.id)
  )?.[0].data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subReddit}>{post.subreddit_name_prefixed}</Text>
        <Text style={styles.time}>21 hr ago</Text>
      </View>
      <Text style={styles.author}>{`Posted by: ${post.author}`}</Text>

      <Text style={styles.postTitle}>{post.title}</Text>

      {post.post_hint && post.post_hint === 'image' && (
        <Image source={{ uri: post.url }} style={styles.postImage} resizeMode={'cover'} />
      )}

      <View style={styles.totalCommentsContainer}>
        <Text style={styles.totalComments}>{post.num_comments} Comments</Text>
      </View>

      <CommentList postId={route.params.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10
  },
  subReddit: {
    fontWeight: '500',
    fontSize: 16,
    color: color.blue60
  },
  time: {
    marginLeft: 10,
    color: color.neutral50,
    fontWeight: 'bold'
  },
  author: {
    marginTop: 5,
    color: color.neutral90,
    fontWeight: '300',
    marginLeft: 20
  },
  postTitle: {
    marginTop: 15,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10
  },
  postImage: {
    height: 400,
    width: '100%',
    marginTop: 5
  },
  totalCommentsContainer: {
    marginTop: 20,
    marginLeft: 20
  },
  totalComments: {
    fontWeight: 'bold',
    fontSize: 14
  }
});

export default PostDetailsScreen;
