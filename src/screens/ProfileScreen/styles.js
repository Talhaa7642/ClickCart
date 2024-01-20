import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  services: {
    alignSelf: 'center',
    // marginLeft: '20%',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  headerView: {
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9CCBBF',
    borderRadius: 20,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    marginVertical: '2%',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '4%',
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: WHITE,
  },
  profileFields: {
    height: 50,
    width: '100%',
    marginVertical: 6,
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 14,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    // fontWeight: '500',
    fontSize: 18,
  },
  rightText: {
    // fontWeight: '500',
    fontSize: 16,
    color: '#B5B2B2',
  },
  editProfile: {
    backgroundColor: '#9CCBBF',
    height: 45,
    width: '100%',
    marginVertical: '2%',
    borderRadius: 28,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtn: {
    height: 50,
    width: '100%',
    marginVertical: 6,
    padding: 10,
    borderRadius: 28,
    elevation: 1,
    alignSelf: 'center',
    backgroundColor: PRIMARY_COLOR,
    // bottom: 10,
    // position: 'absolute',
  },
});
