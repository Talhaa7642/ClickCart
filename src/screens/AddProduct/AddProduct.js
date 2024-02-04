import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {LIGHT_GREY1, MID_YELLOW, SOLID_BLACK} from '../../utils/colors';
import AppTextInput from '../../components/AppTextInput';
import SmallButton from '../../components/SmallButton';
import {EvilIcons} from '../../utils/icons';

const AddProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Add Product"
        rightBtn
        rightOnPress={() => console.log('draft press')}
      />
      <View style={styles.row}>
        <Text style={styles.txt}>Product Name</Text>
        <Text style={styles.txt}>0/255</Text>
      </View>

      <AppTextInput
        hideIcon
        placeholder="Enter Name"
        inputStyle={{marginBottom: '10%'}}
      />

      <View style={styles.row}>
        <Text style={styles.txt}>Product Category</Text>
        <Text style={styles.txt}>Add</Text>
      </View>

      <Text style={styles.txt1}>
        Tag your product in the right category to increase visibility when
        customer search
      </Text>

      <Text style={[styles.txt, {marginTop: '5%'}]}>Product Photos</Text>
      <Text style={styles.txt1}>
        Products with Good photos gets upto 5x more views and sales. Add between
        3 to 8 photos, try to take different angles.Upload good quality
        pictures(Min 300x300)
      </Text>

      <View style={styles.row}>
        <View style={styles.row1}>
          <EvilIcons name="image" size={30} color={SOLID_BLACK} />
          <Text style={styles.txt1}>Upload Photos</Text>
        </View>

        <View style={styles.row1}>
          <EvilIcons name="camera" size={30} color={SOLID_BLACK} />
          <Text style={styles.txt1}>Upload Photos</Text>
        </View>
      </View>

      <View style={styles.row}>
        <SmallButton
          title="Preview"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />
        <SmallButton
          onPress={() => navigation.navigate('AllProduct')}
          title="Submit"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  row1: {
    backgroundColor: LIGHT_GREY1,
    padding: 8,
    width: '45%',
    height: '70%',
    borderRadius: 8,
    marginVertical: '14%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontWeight: '400',
    fontSize: 20,
    color: SOLID_BLACK,
  },
  txt1: {
    marginTop: '2%',
    fontWeight: '400',
    fontSize: 14,
    color: SOLID_BLACK,
  },
  btnStyle: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    padding: 14,
    width: '45%',
    marginHorizontal: 0,
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: SOLID_BLACK,
  },
});
