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
import {WHITE} from '../../utils/colors';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';

const HomeScreen = ({navigation, route}) => {
  const {location} = route.params || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const handleSearch = query => {
    setSearchQuery(query);

    const filtered = CategoriesArray.filter(category =>
      category.serviceName.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCategories(filtered);
  };

  const navigateToServiceProviderScreen = () => {
    navigation.navigate('ServiceProviderScreen', {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.services}>Services</Text>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/logos/googleMaps.png')} />
          <Text style={styles.loactionText}>
            {location ? location : 'Lahore'}
          </Text>
        </TouchableOpacity>
        <ImageBackground
          style={styles.profilePic}
          source={require('../../assets/images/carpenter.png')}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search a Store or Product"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView style={styles.categories}>
        {filteredCategories.map(category => (
          <View style={{}} key={category.id}>
            <Categories
              serviceName={category.name}
              serviceImage={category.image}
              onPress={() =>
                navigation.navigate(
                  'ServiceProviderScreen',
                  category.serviceName,
                )
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  services: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '10%',
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
  categories: {
    // flex: 1,
    backgroundColor: WHITE,
    padding: '5%',
    // flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
});
