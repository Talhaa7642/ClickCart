import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  services: {
    // alignSelf: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '14%',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9CCBBF',
    borderRadius: 20,
    paddingHorizontal: '2%',
    marginVertical: '2%',
  },
  loactionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor: 'green',
  },
  input: {
    height: 54,
    width: '100%',
    marginVertical: 12,
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 28,
    elevation: 1,
  },
  typesView: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE,
    elevation: 1,
  },
  typesText: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: '2%',
  },
  categories: {
    marginTop: '2%',
    backgroundColor: WHITE,
    padding: '5%',
    borderRadius: 20,
  },
  datePicker: {
    backgroundColor: WHITE,
    // width: '40%',
    borderRadius: 12,
    paddingHorizontal: '4%',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
