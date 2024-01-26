import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Heading = ({title, styleContainer, styleText}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
  containerText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});
