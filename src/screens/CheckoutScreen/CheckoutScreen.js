import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MID_YELLOW, WHITE} from '../../utils/colors';
import Header from '../../components/Header';
import {CategoriesArray} from '../../utils/constants';
import CartCard from '../../components/CartCard';
import SmallButton from '../../components/SmallButton';

const CheckoutScreen = ({navigation}) => {
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const renderItem = ({item}) => <CartCard item={item} />;

  return (
    <View style={styles.container}>
      <Header title="Checkout" rightIcon={null} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <SmallButton
        onPress={() => navigation.navigate('PaymentScreen')}
        title="Continue to payment"
        btnStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
    backgroundColor: WHITE,
  },
  btnStyle: {
    position: 'relative',
    bottom: 20,
    padding: 14,
    marginHorizontal: 0,
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: WHITE,
  },
});
