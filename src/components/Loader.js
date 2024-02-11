import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SOLID_BLACK} from '../utils/colors';

const Loader = ({size = 'small', indicatorStyle}) => {
  return (
    <ActivityIndicator size={size} color={SOLID_BLACK} style={indicatorStyle} />
  );
};

export default Loader;

const styles = StyleSheet.create({});
