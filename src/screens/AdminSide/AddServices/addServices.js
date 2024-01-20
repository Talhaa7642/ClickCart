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
const AddServices = ({navigation, props}) => {
  const [services, setServices] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newService, setNewService] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addService = () => {
    if (newService.trim() === '') {
      return; // Do not add empty service
    }
    setServices([...services, newService]);
    setNewService('');
    toggleModal(); // Close the modal after adding the service
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
          <Text style={styles.services}>Service</Text>
          <TouchableOpacity
            style={{marginLeft: '2%', backgroundColor: WHITE, borderRadius: 20}}
            onPress={toggleModal}>
            <Image
              style={{height: 30, width: 30, borderRadius: 20}}
              source={require('../../../assets/images/plusround.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: '2%'}}>
        {services.map((service, index) => (
          <View style={styles.serviceList}>
            <Text style={{fontSize: 16, fontWeight: '500'}} key={index}>
              {service}
            </Text>
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
              height: windowHeight * 0.2,
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
                placeholder="Enter service title"
                value={newService}
                onChangeText={setNewService}
              />
              <TouchableOpacity style={styles.addButton} onPress={addService}>
                <Text style={styles.services}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default AddServices;
