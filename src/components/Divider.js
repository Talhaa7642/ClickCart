import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LIGHT_GREY0} from '../utils/colors';

const Divider = ({space = '10%'}) => {
  return <View style={styles.divider(space)} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: space => ({
    width: '100%',
    borderWidth: 1,
    borderColor: LIGHT_GREY0,
    marginVertical: space,
  }),
});
