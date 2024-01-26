import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppButton, AppForm, Heading} from '../components';
import { StyleSheet, View } from 'react-native';

export const LoginScreen = ({navigation}: any) => {
  const buttonPress = () => {
    navigation.navigate('Profile', {name: 'login'});
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading title="Login" />
        <AppForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    paddingVertical: 20,
    paddingHorizontal: 7,
  },
});