import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LeftArrowSvg from '../assets/Svgs/LeftArrowSvg';
import SearchSvg from '../assets/Svgs/SearchSvg';
import {useNavigation} from '@react-navigation/native';
import {BLACK1, MID_PINK} from '../utils/colors';

const Header = ({title, rightIcon, rightBtn, rightOnPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <LeftArrowSvg />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? (
        rightIcon
      ) : rightBtn ? (
        <View onPress={rightOnPress} style={styles.draftCont}>
          <Text style={styles.draftTxt}>Save Draft</Text>
        </View>
      ) : (
        <View style={{padding: 20}} />
      )}
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
  draftCont: {
    padding: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#C494C557',
    justifyContent: 'center',
    alignItems: 'center',
  },
  draftTxt: {
    fontSize: 14,
    color: MID_PINK,
  },
});
