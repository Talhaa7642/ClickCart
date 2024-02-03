import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WHITE} from '../utils/colors';

const Circle = ({size = 44, containerStyle, children}) => {
  return <View style={[styles.circle(size), containerStyle]}>{children}</View>;
};

export default Circle;

const styles = StyleSheet.create({
  circle: size => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
