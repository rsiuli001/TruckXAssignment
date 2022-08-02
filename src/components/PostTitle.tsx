import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface PostTitleProps {
  text: string;
}

const PostTitle: FC<PostTitleProps> = ({ text }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default PostTitle;
