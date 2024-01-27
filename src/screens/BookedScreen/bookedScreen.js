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
import {PRIMARY_COLOR, SOLID_BLACK, WHITE} from '../../utils/colors';
import { styles } from './styles';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';
import ServiceProviderDetails from '../../components/serviceProvider';
const BookedScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const handleSearch = query => {
    setSearchQuery(query);

    const filtered = CategoriesArray.filter(category =>
      category.serviceName.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCategories(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.services}>Service Description</Text>
      <ImageBackground
        style={{
          width: '100%',
          height: '70%',
          alignSelf: 'center',
          justifyContent: 'center',
          //   backgroundColor: 'red',
        }}
        source={require('../../assets/images/bookingBG.png')}
      />
      <Text style={styles.bookedText}>Booked Successfully!</Text>
      <Text style={styles.contactText}>
        Thank you forr your booking! Our representative will contact you shortly
      </Text>

      <TouchableOpacity
        style={{...styles.categories, backgroundColor: PRIMARY_COLOR}}
        onPress={() => navigation.navigate('BottomTabNavigator')}>
        <Text style={{...styles.typesText, color: WHITE, alignSelf: 'center'}}>
          Okay!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookedScreen;
