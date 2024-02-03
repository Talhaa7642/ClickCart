import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MID_YELLOW, SOLID_BLACK, WHITE} from '../utils/colors';
import SmallButton from './SmallButton';

const PopularCard = ({item, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={item.image} style={styles.img} />

      <Text style={styles.priceTxt}>RS. 280</Text>
      <Text style={styles.nameTxt}>{item.name}</Text>
      <SmallButton
        titleStyle={styles.titleStyle}
        btnStyle={styles.btnStyle}
        title="Add to Cart"
        onPress={() => console.log('Cart Press')}
      />
    </Pressable>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 290,
    paddingVertical: '6%',
    paddingHorizontal: '3%',
    backgroundColor: WHITE,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: MID_YELLOW,
    borderWidth: 1,
  },
  img: {
    height: '60%',
    width: '100%',
    borderRadius: 10,
  },
  priceTxt: {
    marginTop: 12,
    fontWeight: '800',
    fontSize: 18,
    color: SOLID_BLACK,
  },
  nameTxt: {
    marginBottom: 10,
    fontWeight: '300',
    fontSize: 14,
    color: SOLID_BLACK,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: WHITE,
  },
  btnStyle: {
    backgroundColor: MID_YELLOW,
  },
});
