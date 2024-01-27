import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {height: 180, width: 180, borderRadius: 60, marginBottom: 10},
  input: {
    height: 44,
    width: '90%',
    margin: '3%',
    padding: 10,
    // backgroundColor: WHITE,
    // borderRadius: 22,
    elevation: 1,
    borderBottomWidth: 1, borderBottomColor: 'grey'
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
