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
import DatePicker from 'react-native-datepicker';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';
import ServiceProviderDetails from '../../components/serviceProvider';
const ProviderDescriptionScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

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
        <Text style={styles.services}>Service Description</Text>
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
        <View style={{marginVertical: '2%'}}>
          <Text style={styles.typesText}>Service Type</Text>
          <View style={styles.categories}>
            <Text style={styles.typesText}>Electrition </Text>
          </View>
        </View>
        <View style={{marginVertical: '2%'}}>
          <Text style={styles.typesText}>Service Provider</Text>
          <View style={styles.categories}>
            <View style={styles.typesView}>
              <Text style={styles.typesText}>Ijaz Electrition </Text>
            </View>
          </View>
        </View>
        <View style={{marginVertical: '2%'}}>
          <Text style={styles.typesText}>Add Your Location</Text>
          <View style={styles.categories}>
            <View style={styles.typesView}>
              <Text style={styles.typesText}>Main Gulshan-e-ravi Lahore </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginVertical: '2%', marginHorizontal: '2%'}}>
            <Text style={styles.dateText}>Service Date</Text>
            <DatePicker
              style={styles.datePicker}
              date={date}
              mode="date"
              placeholder="Select Date"
              format="YYYY-MM-DD"
              minDate="2021-01-01"
              maxDate="2025-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth: 0,
                },
              }}
              onDateChange={date => setDate(date)}
            />
          </View>
          <View style={{marginVertical: '2%', marginHorizontal: '2%'}}>
            <Text style={styles.dateText}>Service Time</Text>

            <DatePicker
              style={styles.datePicker}
              date={time}
              mode="time"
              placeholder="Select Time"
              format="HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth: 0,
                },
              }}
              onDateChange={time => setTime(time)}
            />
          </View>
        </View>
        <View style={{marginVertical: '2%'}}>
          <Text style={styles.typesText}>Work Description</Text>
          <View style={styles.categories}>
            <View style={styles.typesView}>
              <TextInput
                style={styles.typesText}
                placeholder="Write about service you need & your budget as well"
              />
            </View>
          </View>
        </View>
        <View style={{marginVertical: '2%'}}>
          <Text style={styles.typesText}>Upload Services Related Images</Text>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.typesView}>
              <Text style={styles.typesText}>Upload Images </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{...styles.categories, backgroundColor: PRIMARY_COLOR}}
          onPress={() => navigation.navigate('BookedScreen')}>
          <Text
            style={{...styles.typesText, color: WHITE, alignSelf: 'center'}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProviderDescriptionScreen;

const styles = StyleSheet.create({
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
