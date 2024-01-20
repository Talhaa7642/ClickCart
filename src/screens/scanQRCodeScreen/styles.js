import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {height: 180, width: 180, borderRadius: 60, marginBottom: 10},
  input: {
    height: 54,
    width: '100%',
    marginVertical: 12,
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 28,
    elevation: 1,
  },
  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    height: 44,
    width: '90%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
  },
});
