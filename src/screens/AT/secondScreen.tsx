import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const SecondScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '50%',
          backgroundColor: '#16348C',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '4%',
            marginTop: '14%',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 30, width: 30, }}
            source={require('../../assets/logos/backArrow.png')}
          />
          <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
            Create New Task
          </Text>
          <Image
            style={{height: 30, width: 30, }}
            source={require('../../assets/logos/searchIcon.png')}
          />
        </View>
        <View style={{marginHorizontal: '4%', marginTop: '10%'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
              marginVertical: '4%',
            }}>
            Title
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400', color: 'white'}}>
            Design Meetings
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              marginVertical: '2%',
            }}
          />
        </View>
        <View style={{marginHorizontal: '4%'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
              marginVertical: '4%',
            }}>
            Date
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400', color: 'white'}}>
            12 Oct 2022
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              marginVertical: '2%',
            }}
          />
        </View>
      </View>

      <View
        style={{
          height: '68%',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1,
          top: -30, 
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: '4%',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginHorizontal: '10%', marginVertical: '6%'}}>
            <Text style={{fontSize: 16}}>Sart Time</Text>
            <Text style={{fontSize: 14, marginVertical: '12%'}}>2:00 PM</Text>
            <View
              style={{
                borderWidth: 0.5,
                marginVertical: '2%',
              }}
            />
          </View>
          <View style={{marginHorizontal: '10%', marginVertical: '6%'}}>
            <Text style={{fontSize: 16}}>End Time</Text>
            <Text style={{fontSize: 14, marginVertical: '12%'}}>4:00 PM</Text>
            <View
              style={{
                borderWidth: 0.5,
                marginVertical: '2%',
              }}
            />
          </View>
        </View>
        <View style={{marginHorizontal: '4%'}}>
          <Text style={{fontSize: 20}}>Description</Text>
          <Text style={{fontSize: 14, marginVertical: '4%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              marginVertical: '2%',
            }}
          />
        </View>
        <Text
          style={{marginHorizontal: '4%', fontSize: 20, marginVertical: '2%'}}>
          Category
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={{
              padding: 4,
              paddingHorizontal: '4%',
              margin: '2%',
              backgroundColor: '#D3D3D3',
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              Meeting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 4,
              paddingHorizontal: '4%',
              margin: '2%',

              backgroundColor: '#D3D3D3',
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              Monetring
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 4,
              paddingHorizontal: '4%',
              margin: '2%',

              backgroundColor: '#16348C',
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              Production
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 4,
              paddingHorizontal: '4%',
              margin: '2%',

              backgroundColor: '#D3D3D3',
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              Dev
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 4,
              paddingHorizontal: '4%',
              margin: '2%',

              backgroundColor: '#D3D3D3',
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              Decorative Design
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 4,
              paddingHorizontal: '4%',
              margin: '2%',

              backgroundColor: '#D3D3D3',
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              UI Design
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#16348C',
            height: 50,
            width: '100%',
            marginVertical: '1%',
            borderRadius: 22,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
            Create Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScreen;
