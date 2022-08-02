import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import Topbar from '../components/Topbar';
import { MainStackParams } from '../navigation/mainStack';
import { requestPostsAction } from '../redux/actions/action';
import { homeScreenStyles } from '../styles';

interface HomeScreenProps extends NativeStackScreenProps<MainStackParams, 'HomeScreen'> {}

const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }): JSX.Element => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(requestPostsAction(10));
  }, []);

  return (
    <View style={homeScreenStyles.container}>
      <Topbar navigation={navigation} route={route} />
      <PostList navigation={navigation} route={route} />
    </View>
  );
};

export default HomeScreen;
