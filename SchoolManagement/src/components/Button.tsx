import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export const AppButton = ({onPress, children, style}: any) => {
  return (
    <Button onPress={onPress} style={[styles.button, style]}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
});
