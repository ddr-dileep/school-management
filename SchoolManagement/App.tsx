import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {AppStack} from './src/route-stack/AppStack';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
