import React from 'react';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigation/Navigation';

const App = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Toast />
    </>
  );
};

export default App;
