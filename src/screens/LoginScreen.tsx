import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { MainStackParams } from '../navigation/mainStack';

export interface LoginScreenProps extends NativeStackScreenProps<MainStackParams, 'HomeScreen'> {}

const LoginScreen: FC<LoginScreenProps> = ({ navigation, route }): JSX.Element => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default LoginScreen;
