import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from '../data/color';

export interface PostAuthorProps {
  authorName: string;
  subReddit: string;
}

const PostAuthor: FC<PostAuthorProps> = ({ authorName, subReddit }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.subReddit}>{subReddit}</Text>
      <Text style={styles.author}>Posted by u/{authorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subReddit: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16
  },
  author: {
    fontWeight: '300',
    fontSize: 14,
    color: color.neutral70,
    textAlign: 'center'
  }
});

export default PostAuthor;
