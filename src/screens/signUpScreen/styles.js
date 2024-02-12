import {StyleSheet} from 'react-native';
import {
  LIGHT_PURPLE,
  PRIMARY_COLOR,
  SOLID_BLACK,
  WHITE,
} from '../../utils/colors';

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
    flex: 1,
    color: SOLID_BLACK,
  },
  btnStyle: {
    width: '90%',
    marginBottom: '5%',
    position: 'relative',
    padding: 14,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: LIGHT_PURPLE,
  },
  titleStyle: {
    fontWeight: 'bold',
    color: WHITE,
  },
});
