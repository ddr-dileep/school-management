import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppButton, AppImage, Container} from '../components';

export const HomeScreen = ({navigation}: any) => {
  const buttonPress = () => {
    navigation.navigate('Profile', {name: 'login'});
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Container style={styles.homeContainer}>
          <View style={styles.homeContainer}>
            <AppImage
              src="https://www.wdsoft.in/blog-images/2018/08/Badge-Logo.png"
              style={styles.imageStyle}
            />
            <Text style={styles.text}>Welcome to Smart school</Text>
            <AppButton style={styles.button} onPress={buttonPress}>
              <AppImage
                src="https://icon-library.com/images/side-arrow-icon/side-arrow-icon-14.jpg"
                style={styles.buttonArrow}
              />
            </AppButton>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FF5733',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  homeContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 250,
    height: 300,
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 30,
  },
  buttonArrow: {
    width: 55,
    height: 55,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
});
export default HomeScreen;
