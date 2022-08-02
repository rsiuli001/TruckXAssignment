import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { LogBox, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { MainStack } from './src/navigation';
import store from './src/redux/store';

const App: FC = (): JSX.Element => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainStack></MainStack>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
