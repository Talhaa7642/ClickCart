import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LeftArrowSvg from '../assets/Svgs/LeftArrowSvg';
import SearchSvg from '../assets/Svgs/SearchSvg';
import {useNavigation} from '@react-navigation/native';
import {BLACK1} from '../utils/colors';

const Header = ({title, rightIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <LeftArrowSvg />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? rightIcon : <View style={{padding: 20}} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: BLACK1,
  },
});
