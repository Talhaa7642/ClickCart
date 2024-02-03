import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK0} from '../utils/colors';

const OvalCategories = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={item.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{item.serviceName}</Text>
    </Pressable>
  );
};

export default OvalCategories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 120,
    width: 85,
    alignItems: 'center',
    marginRight: 4,
  },
  image: {
    width: 57,
    height: 55,
    transform: [{scaleY: 1.25}],
    borderRadius: 50 / 2,
    overflow: 'hidden',
    marginBottom: 15,
  },
  name: {
    fontSize: 14,
    lineHeight: 15,
    fontWeight: '400',
    color: BLACK0,
  },
});
