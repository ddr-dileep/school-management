import {StyleSheet, View} from 'react-native';
import React from 'react';

export const Container = ({children, style}: any) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
