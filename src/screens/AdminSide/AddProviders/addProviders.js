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
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../utils/colors';
import Categories from '../../../components/categories';
import {CategoriesArray, ServicesArray} from '../../../utils/constants';
import {styles} from './styles';
import AdminBoard from '../../../components/adminBoard';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddProviders = ({navigation, props}) => {
  const [newProvider, setNewProvider] = useState([]);
  const [providers, setProviders] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [providerName, setProviderName] = useState('');
  const [providerNo, setProviderNo] = useState('');
  const [providerLocation, setProviderLocation] = useState('');
  const [service, setService] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addProviders = () => {
    if (
      providerName.trim() === '' ||
      providerNo.trim() === '' ||
      providerLocation.trim() === ''
    ) {
      return; // Do not add empty fields
    }

    const newProvider = {
      name: providerName,
      number: providerNo,
      location: providerLocation,
      service: service,
    };

    setProviders([...providers, newProvider]);
    setProviderName('');
    setProviderNo('');
    setProviderLocation('');
    setService(''), toggleModal(); // Close the modal after adding the provider
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: windowHeight * 0.1,
          width: windowWidth * 1,
          backgroundColor: PRIMARY_COLOR,
        }}>
        <View
          style={{
            marginTop: '10%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '4%',
          }}>
          <TouchableOpacity
            style={{marginLeft: '2%'}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../assets/images/left.png')}
            />
          </TouchableOpacity>
          <Text style={styles.services}>Providers</Text>
          <TouchableOpacity style={{marginLeft: '2%', backgroundColor: WHITE, borderRadius: 20}} onPress={toggleModal}>
            <Image
              style={{height: 30, width: 30, borderRadius: 20}}
              source={require('../../../assets/images/plusround.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: '2%'}}>
        {providers?.map((provider, index) => (
          <View style={styles.serviceList} key={index}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>
                {provider.name}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#50C878'}}>
                {provider.service}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View
            style={{
              bottom: 0,
              position: 'absolute',
              height: windowHeight * 0.44,
              width: windowWidth * 1,
              // alignItems: 'center',
              // justifyContent: 'center',
              backgroundColor: WHITE,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}>
            <View style={{marginHorizontal: '2%'}}>
              <TextInput
                style={styles.input}
                placeholder="Provider Name"
                value={providerName}
                onChangeText={setProviderName}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Provider No."
                value={providerNo}
                onChangeText={setProviderNo}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Provider Location"
                value={providerLocation}
                onChangeText={setProviderLocation}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Service"
                value={service}
                onChangeText={setService}
              />
              <TouchableOpacity style={styles.addButton} onPress={addProviders}>
                <Text style={styles.services}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default AddProviders;
