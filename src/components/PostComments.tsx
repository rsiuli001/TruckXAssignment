import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import color from '../data/color';
import { PostData } from '../types/post';
import Button from './Button';

export interface PostCommentsProps extends PostData {
  onPress: () => void;
}

const PostComments: FC<PostCommentsProps> = ({ onPress, ...props }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Button
        label={`Comments: ${props.num_comments}`}
        style={styles.commentsContainer}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'flex-start'
  },
  commentsContainer: {
    borderWidth: 1.5,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: color.blue40
  }
});

export default PostComments;
