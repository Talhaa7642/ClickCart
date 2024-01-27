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
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {styles} from './styles';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';
import ServiceProviderDetails from '../../components/serviceProvider';
const ProfileScreen = ({route, navigation}) => {
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
    navigation.navigate('ProviderDescriptionScreen');
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: '10%'}}>
        <Text style={styles.services}>ProfileScreen</Text>
      </View>
      <View style={styles.headerView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={styles.profilePic}
            source={require('../../assets/images/personIcon.png')}
          />
          <Text style={styles.userName}>User Name </Text>
        </View>
      </View>
      <View style={styles.profileFields}>
        <Text style={styles.leftText}>Name: </Text>
        <Text style={styles.rightText}>Talha Shabbir </Text>
      </View>
      <View style={styles.profileFields}>
        <Text style={styles.leftText}>Phone no.: </Text>
        <Text style={styles.rightText}>03202919700 </Text>
      </View>

      <View style={styles.profileFields}>
        <Text style={styles.leftText}>Location: </Text>
        <Text style={styles.rightText}>Gulshan-e-ravi Lahore</Text>
      </View>
      <TouchableOpacity style={styles.editProfile}>
        <Text
          style={{
            ...styles.leftText,
            textAlign: 'center',
            color: PRIMARY_COLOR,
          }}>
          Previous Orders
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editProfile}>
        <Text
          style={{
            fontSize: 18,

            // textAlign: 'center',
            color: PRIMARY_COLOR,
          }}>
          Customer Support
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editProfile}>
        <Text
          style={{
            ...styles.leftText,
            textAlign: 'center',
            color: PRIMARY_COLOR,
          }}>
          Terms and Conditions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editProfile}>
        <Text
          style={{
            ...styles.leftText,
            textAlign: 'center',
            color: PRIMARY_COLOR,
          }}>
          EditProfile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.logoutBtn}>
        <Text style={{...styles.leftText, textAlign: 'center', color: WHITE}}>
          LogOut
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          bottom: 0,
          position: 'absolute',
        }}>
        App Version 1.1.0
      </Text>
    </View>
  );
};

export default ProfileScreen;
