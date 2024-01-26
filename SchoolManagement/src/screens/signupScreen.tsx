import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppButton, AppForm, Heading} from '../components';
import {StyleSheet, View} from 'react-native';
import {signUpFields} from '../constants/signupFields';

export const SignupScreen = ({navigation}: any) => {
  const buttonPress = () => {
    // navigation.navigate('Profile', {name: 'login'});
  };

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    console.log(name, value);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading title="Register here" />
        <AppForm formFields={signUpFields} handleChange={handleChange} />
        <AppButton style={styles.registerButton} onPress={buttonPress}>
          Register
        </AppButton>
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
  registerButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3498db',
    marginVertical: 10,
  },
});
