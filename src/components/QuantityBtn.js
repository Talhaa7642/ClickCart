import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LIGHT_GREY0, SOLID_BLACK} from '../utils/colors';
import {Entypo} from '../utils/icons';

const QuantityBtn = ({onPlusPress, onMinusPress, quantity = 0}) => {
  return (
    <View style={styles.container}>
      <Entypo
        name="minus"
        size={20}
        color={SOLID_BLACK}
        onPress={onMinusPress}
        style={{paddingHorizontal: 10}}
      />
      <Text style={styles.qtyTxt}>{quantity}</Text>
      <Entypo
        name="plus"
        size={20}
        color={SOLID_BLACK}
        onPress={onPlusPress}
        style={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default QuantityBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: SOLID_BLACK,
  },
  qtyTxt: {
    backgroundColor: LIGHT_GREY0,
    paddingVertical: 5,
    width: 34,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    color: SOLID_BLACK,
  },
});
