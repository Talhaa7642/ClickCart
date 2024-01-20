import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {PRIMARY_COLOR, SOLID_BLACK, WHITE} from '../../utils/colors';
import Svg, {SvgXml} from 'react-native-svg';
import {RED_ERROR} from '../../utils/colors';
import {styles} from './styles';
import {SPLASH_SCREEN_IMAGE} from '../../utils/assets';
import LinearGradient from 'react-native-linear-gradient';
import {CategoriesArray} from '../../utils/constants';

const ScanQRScreen = ({navigation}) => {
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
    // <View style={[styles.container]}>
    <LinearGradient
      colors={['#4c56', '#3b5998', '#192f6a']}
      style={[styles.container]}>
      <View style={{height: '40%'}}>
        <Image
          style={styles.logo}
          source={require('../../assets/logos/logo.png')}
        />
      </View>
      <View style={{marginHorizontal: '4%', width: '90%'}}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{
          height: 50,
          width: '90%',
          backgroundColor: 'white',
          borderRadius: 20,
        //   alignItems: 'center',
          // justifyContent: 'center',
        }}>
      <TouchableOpacity
        style={{
          
        //   backgroundColor: 'white',
        //   width: '60%',
        //   borderRadius: 20,
        //   alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Text>Scan Store's QR Code</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    // </View>
  );
};

export default ScanQRScreen;
