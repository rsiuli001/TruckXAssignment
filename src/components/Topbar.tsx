import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import color from '../data/color';
import { MainStackParams } from '../navigation/mainStack';
import Button from './Button';

export interface TopbarProps extends NativeStackScreenProps<MainStackParams, 'HomeScreen'> {}

const Topbar: FC<TopbarProps> = ({ navigation, route }): JSX.Element => {
  const onPress = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, []);

  return (
    <View style={styles.container}>
      <Button style={styles.buttonStyle} label={'Login'} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row-reverse',
    backgroundColor: color.white
  },
  buttonStyle: {
    marginRight: 20,
    height: 40,
    borderWidth: 1.4,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.blue40
  }
});

export default Topbar;
