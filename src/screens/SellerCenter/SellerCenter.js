import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  BRICK_RED,
  GREY_MID,
  LIGHT_GREY1,
  ORANGE,
  SOLID_BLACK,
  WHITE,
} from '../../utils/colors';
import {AntDesign, Feather} from '../../utils/icons';
import Circle from '../../components/Circle';
import {getDocs} from 'firebase/firestore';
import {storeRef} from '../../firebase';

const SellerCenter = ({navigation}) => {
  const [storeInfo, setStoreInfo] = useState(null);

  useEffect(() => {
    getDocs(storeRef)
      .then(snapshot =>
        setStoreInfo({...snapshot.docs[0].data, id: snapshot.docs[0].id}),
      )
      .catch(err => console.log('get store err', err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Seller Center</Text>

      <View style={styles.row}>
        <Image
          source={require('../../assets/images/bookStore.png')}
          style={styles.img}
        />

        <View>
          <Text style={styles.heading}>##ECP</Text>
          <Text style={styles.desc}>
            Store link available here after store is active
          </Text>
        </View>

        <AntDesign name="sharealt" size={30} color={SOLID_BLACK} />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.txt}>
          Please Complete todo as soon as possible and then start the journey
          today!
        </Text>

        <Pressable
          style={styles.capsule}
          onPress={() => navigation.navigate('AddStore')}>
          <Circle
            size={24}
            containerStyle={{backgroundColor: ORANGE, marginRight: '15%'}}>
            <Text>1</Text>
          </Circle>

          <Text style={styles.capTxt}>Add Store</Text>

          <Feather name="chevron-right" size={30} color={SOLID_BLACK} />
        </Pressable>

        <Pressable
          style={styles.capsule}
          onPress={() => navigation.navigate('AddProduct')}>
          <Circle
            size={24}
            containerStyle={{backgroundColor: ORANGE, marginRight: '15%'}}>
            <Text>2</Text>
          </Circle>

          <Text style={styles.capTxt}>Add Product</Text>

          <Feather name="chevron-right" size={30} color={SOLID_BLACK} />
        </Pressable>
      </View>
    </View>
  );
};

export default SellerCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  innerContainer: {
    height: '60%',
    backgroundColor: BRICK_RED,
    width: '100%',
    padding: '5%',
    borderRadius: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heading: {
    fontWeight: '700',
    fontSize: 24,
    color: SOLID_BLACK,
  },
  desc: {
    fontWeight: '400',
    fontSize: 12,
    color: SOLID_BLACK,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  row: {
    marginVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontWeight: '400',
    fontSize: 16,
    color: WHITE,
    textAlign: 'center',
  },
  capsule: {
    width: '90%',
    paddingVertical: '4%',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 33,
    backgroundColor: LIGHT_GREY1,
  },
  capTxt: {
    flex: 1,
    fontWeight: '400',
    fontSize: 16,
    color: SOLID_BLACK,
  },
});
