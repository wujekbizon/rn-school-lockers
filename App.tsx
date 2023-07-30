import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import Navigation from './navigation/Navigation';

const App = (props: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Navigation />
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
