import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const FirstScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: '50%'}}>
        <Image
          style={{height: 60, width: 60, marginVertical: 40, marginLeft: 20}}
          source={require('../../assets/logos/hamburgerIcon2.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
          }}>
          <Text style={{fontSize: 36, fontWeight: '700'}}>OCT 2020</Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 6,
              paddingVertical: 4,
              backgroundColor: 'purple',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              + Add Task
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: '50%',
          backgroundColor: '#D3D3D3',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: '6%',
            marginHorizontal: '4%',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'white',
              marginHorizontal: 10,
            }}></View>
          <Text style={{fontSize: 28, fontWeight: '500'}}>Task 1</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: '4%',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'white',
              marginHorizontal: 10,
            }}></View>
          <Text style={{fontSize: 28, fontWeight: '500'}}>Task 2</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            height: 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            marginTop: '66%',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'purple',
              borderRadius: 22,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: '500', color: 'white'}}>
              V
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
