import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {BLACK0, LIGHT_GREY0, WHITE} from '../utils/colors';

const ShopsCard = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {/* <Image style={styles.image} source={item.image} resizeMode="cover" /> */}
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
  );
};

export default ShopsCard;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    padding: 4,
    borderRadius: 8,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  image: {
    width: 46,
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
    color: BLACK0,
  },
});
