import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {GREY_NEUTRAL, SOLID_BLACK, WHITE} from '../utils/colors';
import SearchSvg from '../assets/Svgs/SearchSvg';

const AppTextInput = ({
  hideIcon,
  placeholder,
  value,
  onChangeText,
  inputStyle,
}) => {
  return (
    <View style={[styles.row1, styles.inputContainer, inputStyle]}>
      {hideIcon ? null : (
        <View style={styles.searchIcon}>
          <SearchSvg />
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={GREY_NEUTRAL}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 12,
  },
  inputContainer: {
    marginVertical: 12,
    padding: 4,
    paddingHorizontal: 16,
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 1,
  },
  input: {
    height: 54,
    flex: 1,
    // width: '100%',
    padding: 10,
    color: SOLID_BLACK,
    fontSize: 16,
  },
});
