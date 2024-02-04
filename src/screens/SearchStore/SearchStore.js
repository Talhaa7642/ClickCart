import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GREY_MID, SOLID_BLACK, WHITE} from '../../utils/colors';
import AppTextInput from '../../components/AppTextInput';
import {MaterialCommunityIcons} from '../../utils/icons';
import Header from '../../components/Header';
import Divider from '../../components/Divider';

const SearchStore = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <AppTextInput
          placeholder="iPhone 13 pro"
          textInputStyle={{flex: 0.85}}
        />
        <MaterialCommunityIcons
          name="tune-vertical"
          size={30}
          color={SOLID_BLACK}
          style={{marginLeft: 10}}
        />
      </View>

      <View
        style={[styles.row, {justifyContent: 'space-between', marginTop: 10}]}>
        <Text style={styles.txt}>Recent searches</Text>
        <Text style={styles.txt}>Clear All</Text>
      </View>
      <Divider space="5%" />
    </View>
  );
};

export default SearchStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    backgroundColor: WHITE,
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontWeight: '600',
    fontSize: 12,
    color: GREY_MID,
  },
});
