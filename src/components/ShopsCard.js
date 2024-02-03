import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {BLACK0} from '../utils/colors';

const ShopsCard = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={item.image} resizeMode="cover" />
      <Text style={styles.name}>{item.serviceName}</Text>
    </Pressable>
  );
};

export default ShopsCard;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 80,
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
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '500',
    color: BLACK0,
  },
});
