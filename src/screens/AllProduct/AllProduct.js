import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {MID_YELLOW, SOLID_BLACK} from '../../utils/colors';
import SmallButton from '../../components/SmallButton';

const AllProduct = () => {
  return (
    <View style={styles.container}>
      <Header title="All Product" />

      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Text style={styles.heading}>Active (0)</Text>
          <Text style={styles.heading}>Inactive (0)</Text>
          <Text style={styles.heading}>Draft (0)</Text>
        </View>

        <View style={styles.row}>
          <SmallButton
            title="Price"
            btnStyle={styles.btnStyle}
            titleStyle={styles.titleStyle}
          />
          <SmallButton
            title="Created"
            btnStyle={styles.btnStyle}
            titleStyle={styles.titleStyle}
          />
        </View>

        <Image
          source={require('../../assets/images/bookStore.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>
          Opps! seems Like there’s nothing in here yet.
        </Text>

        <SmallButton
          title="Add Product"
          btnStyle={styles.btnStyle1}
          titleStyle={styles.txt}
        />
      </View>
    </View>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    fontWeight: '700',
    fontSize: 24,
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
    backgroundColor: '#C494C591',
  },
  btnStyle1: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    padding: 14,
    marginHorizontal: 0,
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: SOLID_BLACK,
  },
  img: {
    alignSelf: 'center',
    width: 280,
    height: 280,
    borderRadius: 280 / 2,
  },
  txt: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: SOLID_BLACK,
  },
});
