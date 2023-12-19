import {Image} from 'react-native';
import React from 'react';

export const AppImage = ({style, src}: any) => {
  return <Image source={{uri: src}} style={style} />;
};
