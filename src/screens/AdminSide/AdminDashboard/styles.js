import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboard: {
    alignSelf: 'center',
    fontSize: 28,
    color: WHITE,
    fontWeight: 'bold',
  },
  headerView: {
    height: windowHeight * 0.28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 100,
    // backgroundColor: 'green',
  },
  categories: {
    backgroundColor: WHITE,
    padding: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    marginTop: '4%',
  },
});
