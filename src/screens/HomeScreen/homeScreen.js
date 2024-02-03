import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {GREY_MID, SOLID_BLACK, WHITE} from '../../utils/colors';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';
import ShopsCard from '../../components/ShopsCard';
import MenuSvg from '../../assets/Svgs/MenuSvg';
import Avatar from '../../components/Avatar';
import AppTextInput from '../../components/AppTextInput';
import Circle from '../../components/Circle';

const HomeScreen = ({navigation, route}) => {
  const {location} = route.params || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const handleSearch = query => {
    setSearchQuery(query);

    const filtered = CategoriesArray.filter(category =>
      category.serviceName.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCategories(filtered);
  };

  const navigateToServiceProviderScreen = () => {
    navigation.navigate('ServiceProviderScreen', {});
  };

  const renderItemH = ({item}) => (
    <ShopsCard
      item={item}
      onPress={() =>
        navigation.navigate('ServiceProviderScreen', item.serviceName)
      }
    />
  );

  const renderItemV = ({item}) => (
    <Categories
      fav
      name={item.name}
      serviceName={item.serviceName}
      serviceImage={item.image}
      onPress={() =>
        navigation.navigate('ServiceProviderScreen', item.serviceName)
      }
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Circle>
          <MenuSvg />
        </Circle>
        <Avatar uri={require('../../assets/images/carpenter.png')} />
      </View>

      <AppTextInput placeholder="Search A Store or Product" />

      <View style={styles.row1}>
        <Text
          onPress={() => navigation.navigate('StoreScreen')}
          style={styles.catTxt}>
          Categories
        </Text>
        <Text style={styles.viewTxt}>view all</Text>
      </View>

      <FlatList
        horizontal
        data={filteredCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItemH}
      />

      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        data={filteredCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItemV}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  services: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9CCBBF',
    borderRadius: 20,
    paddingHorizontal: '2%',
    marginVertical: '2%',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  loactionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor: 'green',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  catTxt: {
    color: SOLID_BLACK,
    fontSize: 18,
    fontWeight: '400',
  },
  viewTxt: {
    color: GREY_MID,
    fontSize: 12,
    fontWeight: '400',
  },
  categories: {
    // flex: 1,
    backgroundColor: WHITE,
    padding: '5%',
    // flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
});
