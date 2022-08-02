import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import color from '../data/color';
import { useAppSelector } from '../hooks/redux';
import { Comment } from '../types/comment';

export interface CommentListPros {
  postId: string;
}

const CommentList: FC<CommentListPros> = ({ postId }): JSX.Element => {
  const comments: Comment[] = useAppSelector(state => state.comments.comments[postId]);

  const keyExtractor = (item: any): string => item.data.id;

  const renderItem = ({ item }: ListRenderItemInfo<Comment>) => {
    const { data } = item;

    return (
      <View style={styles.commentContainer}>
        <Text style={styles.author}>{data.author}:</Text>
        <Text style={styles.comment}>{data.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
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
  },
  commentContainer: {
    margin: 15,
    paddingLeft: 15,
    justifyContent: 'center'
  },
  author: {
    fontWeight: '600',
    fontSize: 15,
    color: color.blue60
  },
  comment: {
    marginTop: 2,
    fontSize: 15
  }
});

export default CommentList;
