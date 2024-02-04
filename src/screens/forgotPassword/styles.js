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
    justifyContent: 'space-evenly',
  },
  logo: {height: 180, width: 180, borderRadius: 60, marginBottom: 10},
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
  loginButton: {
    backgroundColor: LIGHT_PURPLE,
    height: 44,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
  },
});
