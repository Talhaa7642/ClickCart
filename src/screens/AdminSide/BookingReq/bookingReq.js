import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {WHITE} from '../../../utils/colors';
import {CategoriesArray} from '../../../utils/constants';
import BookingRequest from '../../../components/bookingReq';
const BookingScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRequests, setFilteredRequests] = useState(CategoriesArray);

  return (
    <View style={styles.container}>
      <View
        style={{marginTop: '10%', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{marginLeft: '2%'}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../../assets/images/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.services}>REQUESTS</Text>
      </View>
      <ScrollView>
        <View style={styles.categories}>
          {filteredRequests.map(category => (
            <View style={{alignItems: 'center'}} key={category.id}>
              <BookingRequest serviceName={category.serviceName} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  services: {
    marginLeft: '26%',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
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
  ratingsView: {
    height: 54,
    width: '100%',
    marginVertical: 12,
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 28,
    elevation: 1,
  },
  ratingText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontSize: 22,
  },
  categories: {
    // flex: 1,
    backgroundColor: WHITE,
    padding: '5%',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
});
