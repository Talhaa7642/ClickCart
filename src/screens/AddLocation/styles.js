import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {height: 120, width: 120, borderRadius: 60, marginBottom: 10},
  input: {
    height: '6%',
    width: '90%',
    margin: '3%',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 22,
    elevation: 1,
  },
  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    height: '6%',
    width: '90%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
