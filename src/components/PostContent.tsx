import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PostData } from '../types/post';
import PostTitle from './PostTitle';

export interface PostContentProps extends PostData {}

const PostContent: FC<PostContentProps> = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={{ width: '75%' }}>
        <PostTitle text={props.title} />
      </View>
      <Image
        source={{ uri: props.thumbnail }}
        style={{ height: 52, width: 70, resizeMode: 'cover' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default PostContent;
