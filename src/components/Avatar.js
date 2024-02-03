import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';

const Avatar = ({uri, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={uri} style={styles.img} />
    </Pressable>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  img: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
});
