import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {LIGHT_GREY1, SOLID_BLACK} from '../utils/colors';
import Loader from './Loader';

const SmallButton = ({title, onPress, loader, btnStyle, titleStyle}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, btnStyle]}
      disabled={loader}>
      {loader ? (
        <Loader />
      ) : (
        <Text style={[styles.btnTxt, titleStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY1,
    marginHorizontal: 14,
    borderRadius: 17,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,
    left: 0,
    right: 0,
  },
  btnTxt: {
    fontWeight: '400',
    fontSize: 14,
    color: SOLID_BLACK,
  },
});
