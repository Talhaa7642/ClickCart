import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SmallButton from './SmallButton';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import PopularCard from './PopularCard';
import {useCart} from '../hooks/useCart';
import {MID_YELLOW, SOLID_BLACK, WHITE} from '../utils/colors';

const DealCard = ({item, onPress, onCartPress}) => {
  const navigation = useNavigation();
  const {handleCart} = useCart();

  const renderProductItem = ({item}) => (
    <PopularCard
      item={item}
      onCartPress={() => {
        handleCart(item, item.quantity == 0 ? 1 : item.quantity + 1);
        Toast.show('Product added to cart successfully');
      }}
      onPress={() => navigation.navigate('ProductDetail', item)}
    />
  );

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.nameTxt}>{item.dealName}</Text>

      {item?.deals.length > 0 && (
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row}
          data={item.deals}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProductItem}
        />
      )}
    </Pressable>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '6%',
    paddingHorizontal: '3%',
    backgroundColor: WHITE,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: MID_YELLOW,
    borderWidth: 1,
  },
  img: {
    height: '60%',
    width: '100%',
    borderRadius: 10,
  },
  priceTxt: {
    marginTop: 12,
    fontWeight: '800',
    fontSize: 18,
    color: SOLID_BLACK,
  },
  nameTxt: {
    marginBottom: 10,
    fontWeight: '300',
    fontSize: 14,
    color: SOLID_BLACK,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: WHITE,
  },
});
