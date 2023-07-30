import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation/Navigation';

const App = (): JSX.Element => {
  return <Navigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});

export default App;
