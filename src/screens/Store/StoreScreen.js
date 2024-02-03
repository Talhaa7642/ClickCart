import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import {MID_BLUE} from '../../utils/colors';
import {CategoriesArray} from '../../utils/constants';
import Categories from '../../components/categories';

const StoreScreen = ({navigation}) => {
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const renderItemV = ({item}) => (
    <Categories
      store
      onStorePress={() => navigation.navigate('StoreProductsScreen')}
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
      <Text style={styles.heading}>Categories</Text>

      <AppTextInput placeholder="Search A Store or Product" />

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

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: MID_BLUE,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
