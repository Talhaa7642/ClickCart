import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../utils/colors';
import Categories from '../../../components/categories';
import {CategoriesArray, ServicesArray} from '../../../utils/constants';
import AdminBoard from '../../../components/adminBoard';
import {styles} from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AdminDashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <ImageBackground
          style={styles.profilePic}
          borderRadius={100}
          source={require('../../../assets/images/loginScreenImg.png')}
        />
        <Text style={styles.dashboard}>Dashboard</Text>
      </View>

      <View style={styles.categories}>
        <View style={{flexGrow: 15, alignItems: 'center'}}>
          <AdminBoard
            serviceName="Services"
            serviceImage={require('../../../assets/images/homeappliance.png')}
            onPress={() => navigation.navigate('AddServices')}
          />
        </View>
        <View style={{flexGrow: 15, alignItems: 'center'}}>
          <AdminBoard
            serviceName="Providers"
            serviceImage={require('../../../assets/images/carpenter.png')}
            onPress={() => navigation.navigate('AddProviders')}
          />
        </View>
        <View style={{flexGrow: 15, alignItems: 'center'}}>
          <AdminBoard
            serviceName="Booked Services"
            serviceImage={require('../../../assets/images/clipboard.png')}
            onPress={() => navigation.navigate('BookingScreen')}
          />
        </View>
        <View style={{flexGrow: 15, alignItems: 'center'}}>
          <AdminBoard
            serviceName="Pending Requests"
            serviceImage={require('../../../assets/images/clipboard.png')}
            onPress={() => navigation.navigate('BookingScreen')}
          />
        </View>
        <View style={{flexGrow: 15, alignItems: 'center'}}>
          <AdminBoard
            serviceName="Completed"
            serviceImage={require('../../../assets/images/clipboard.png')}
            onPress={() => navigation.navigate('BookingScreen')}
          />
        </View>
        <View style={{flexGrow: 15, alignItems: 'center'}}>
          <AdminBoard
            serviceName="Cancled Requests"
            serviceImage={require('../../../assets/images/clipboard.png')}
            onPress={() => navigation.navigate('BookingScreen')}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminDashboard;
