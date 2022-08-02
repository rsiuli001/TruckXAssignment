import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import color from '../data/color';
import { useAppSelector } from '../hooks/redux';
import { MainStackParams } from '../navigation/mainStack';
import { requestCommentsAction } from '../redux/actions/action';
import { Post } from '../types/post';
import PostAuthor from './PostAuthor';
import PostComments from './PostComments';
import PostContent from './PostContent';

export interface PostContainerProps extends NativeStackScreenProps<MainStackParams, 'HomeScreen'> {}

const PostList: FC<PostContainerProps> = ({ navigation }): JSX.Element => {
  const dispatch  = useDispatch();
  const posts: Post[] = useAppSelector(state => state.posts.posts);

  const keyExtractor = (item: any): string => item.data.id;

  const onCommentPress = useCallback((id: string) => {
    dispatch(requestCommentsAction(id, 10));
    navigation.navigate('PostDetailsScreen', {
      id
    });
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
    const { data } = item;
    return (
      <View style={styles.postContainer}>
        <PostAuthor authorName={data.author} subReddit={data.subreddit_name_prefixed} />
        <PostContent {...data} />
        <PostComments
          {...data}
          onPress={() => {
            onCommentPress(data.id);
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{ height: 4, backgroundColor: color.neutral20 }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  },
  postContainer: {
    flex: 1,
    margin: 10,
    padding: 10
  }
});

export default PostList;
