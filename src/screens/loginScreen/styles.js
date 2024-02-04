import {StyleSheet} from 'react-native';
import {LIGHT_PURPLE, PRIMARY_COLOR, WHITE} from '../../utils/colors';

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
  },
  btnStyle: {
    width: '40%',
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
    color: WHITE,
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
  row: {
    marginLeft: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
