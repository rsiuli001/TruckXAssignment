import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, PostDetailsScreen } from '../screens';

export type MainStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  PostDetailsScreen: { id: string };
};

const { Screen, Navigator } = createNativeStackNavigator<MainStackParams>();

const MainStack: FC = (): JSX.Element => (
  <Navigator screenOptions={{ gestureEnabled: false }} initialRouteName={'HomeScreen'}>
    <Screen name={'HomeScreen'} component={HomeScreen} options={{ title: 'Home Screen' }} />
    <Screen name={'LoginScreen'} component={LoginScreen} options={{ title: 'Login Screen' }} />
    <Screen
      name={'PostDetailsScreen'}
      component={PostDetailsScreen}
      options={{ title: 'Post Details Screen' }}
    />
  </Navigator>
);

export default MainStack;
