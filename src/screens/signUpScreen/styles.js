import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',

    // flexDirection: 'row',
    // marginHorizontal: 40,
  },

  input: {
    height: '6%',
    width: '90%',
    marginVertical: '2%',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 22,
    elevation: 1,
  },
});
