import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppButton} from '../components';

export const LoginScreen = ({navigation}: any) => {
  const buttonPress = () => {
    navigation.navigate('Profile', {name: 'login'});
  };
  return (
    <SafeAreaView>
      <AppButton onPress={buttonPress}>Go to Jane's profile</AppButton>
    </SafeAreaView>
  );
};
