import React, { FC } from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: FC<ButtonProps> = ({ label, onPress, style = {} }): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;
