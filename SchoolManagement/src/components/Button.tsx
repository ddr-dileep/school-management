import React from 'react';
import {Button} from 'react-native-paper';

export const AppButton = ({onPress, children, style}: any) => {
  return (
    <Button onPress={onPress} style={style}>
      {children}
    </Button>
  );
};
