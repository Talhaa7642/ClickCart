import React, {useEffect, useState} from 'react';
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
import {WHITE} from '../../utils/colors';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';
import ServiceProviderDetails from '../../components/serviceProvider';
const ServiceProviderScreen = ({route, navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  useEffect(() => {
    setFilteredCategories(
      CategoriesArray.filter(el => el.serviceName == serviceName),
    );
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);

    const filtered = CategoriesArray.filter(category =>
      category.serviceName.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCategories(filtered);
  };

  const navigateToServiceProviderScreen = () => {
    navigation.navigate('ProviderDescriptionScreen');
  };

  return (
    <View style={styles.container}>
      <View
        style={{marginTop: '10%', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{marginLeft: '2%'}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.services}>Service Provider</Text>
      </View>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/logos/googleMaps.png')} />
          <Text style={styles.loactionText}>Electritions </Text>
        </TouchableOpacity>
        <ImageBackground
          style={styles.profilePic}
          source={require('../../assets/images/carpenter.png')}
        />
      </View>
      <ScrollView>
        <View style={styles.categories}>
          {filteredCategories.map(category => (
            <View style={{alignItems: 'center'}} key={category.id}>
              <ServiceProviderDetails
                serviceName={category.serviceName}
                onPress={() => navigateToServiceProviderScreen()}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  services: {
    // alignSelf: 'center',
    marginLeft: '20%',
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
