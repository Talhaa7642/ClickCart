import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SOLID_BLACK, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',

    // flexDirection: 'row',
    // marginHorizontal: 40,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: '2%',
    padding: 8,
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 1,
  },
  input: {
    color: SOLID_BLACK,
  },
});
