import React, {useState} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Entypo, MaterialCommunityIcons} from '../../utils/icons';
import {GREY_MID, RED1, SOLID_BLACK} from '../../utils/colors';
import AppTextInput from '../../components/AppTextInput';
import {CategoriesArray} from '../../utils/constants';
import OvalCategories from '../../components/OvalCategories';
import PopularCard from '../../components/PopularCard';

const StoreProductsScreen = ({navigation}) => {
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const renderItem = ({item}) => (
    <OvalCategories
      item={item}
      onPress={() =>
        navigation.navigate('ServiceProviderScreen', item.serviceName)
      }
    />
  );

  const renderProductItem = ({item}) => (
    <PopularCard
      item={item}
      onPress={() => navigation.navigate('ProductDetail', item)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Entypo name="chevron-thin-left" size={34} color={SOLID_BLACK} />
        <MaterialCommunityIcons name="cart" size={36} color={GREY_MID} />
      </View>

      <View style={styles.row2}>
        <ImageBackground
          source={require('../../assets/images/carpenter.png')}
          style={styles.img}
        />
        <Text style={styles.storeTxt}>Sardar G Greocery</Text>
      </View>

      <AppTextInput placeholder="Search Products and Categories" />

      <View style={styles.row3}>
        <Text style={styles.viewTxt}>View All categories</Text>
        <Entypo name="chevron-thin-right" size={14} color={RED1} />
      </View>

      <View>
        <FlatList
          horizontal
          data={filteredCategories}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>

      <Text style={styles.popularTxt}>Popular Products</Text>

      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        data={filteredCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
      />
    </View>
  );
};

export default StoreProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  img: {
    width: 90,
    height: 80,
    borderRadius: 8,
    marginRight: 20,
  },
  storeTxt: {
    fontWeight: '400',
    fontSize: 16,
    color: SOLID_BLACK,
  },

  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
  },
  viewTxt: {
    fontSize: 12,
    fontWeight: '400',
    color: RED1,
  },

  popularTxt: {
    marginVertical: 20,
    fontWeight: '400',
    fontSize: 24,
    color: SOLID_BLACK,
  },
});
