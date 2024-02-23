import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import {getDocs} from 'firebase/firestore';
import {productRef, storeRef} from '../../firebase';
import SmallButton from '../../components/SmallButton';
import {MID_YELLOW, SOLID_BLACK} from '../../utils/colors';
import {
  setDeal,
  updateDeal,
  updateProducts,
} from '../../store/features/dealSlice';
import {useDispatch, useSelector} from 'react-redux';
import PopularCard from '../../components/PopularCard';
import Toast from 'react-native-simple-toast';

let storeId1 = null;

const AddDeal = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const {allProducts} = useSelector(state => state.deal);
  console.log('allProducts', allProducts);

  const [name, setName] = useState('');
  const [loader, setLoader] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const [deals, setDeals] = useState([]);

  const renderProductItem = ({item}) => (
    <PopularCard
      deal
      item={item}
      onDealPress={() => handleDeal(item)}
      onPress={() => navigation.navigate('ProductDetail', item)}
    />
  );

  useEffect(() => {
    getDocs(storeRef)
      .then(snapshot => {
        snapshot.docs.forEach(el => {
          if (el.data().uid == user.uid) {
            storeId1 = el.id;
            setStoreId(el.id);
          }
        });
      })
      .catch(err => console.log('get store err', err));
  }, []);

  useEffect(() => {
    getDocs(productRef)
      .then(snapshot => {
        let products = [];

        snapshot.docs.forEach(el => {
          console.log('edddd', el.data(), storeId);
          if (el.data().storeId == storeId) {
            products.push({...el.data(), id: el.id, quantity: 0});
          }
        });

        dispatch(updateProducts(products));
      })
      .catch(err => {
        console.log('get products err', err);
        setLoader(false);
      });
  }, [storeId]);

  const handleDeal = item => {
    if (name != '') {
      setDeals(prevState => [...prevState, item]);
      Toast.show('Added to deal successfully');
    } else {
      Toast.show('Please enter deal name');
    }
  };

  const handleSubmit = () => {
    if (name != '') {
      let payload = {
        show: true,
        storeId: storeId,
        dealName: name,
        deals: deals,
      };
      dispatch(setDeal(payload));
      Toast.show('Deal Submitted  successfully');
    }
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: '4%'}}>
      <AppTextInput
        hideIcon
        placeholder="Enter Deal Name"
        value={name}
        onChangeText={setName}
        inputStyle={{marginBottom: '0.5%'}}
      />

      {allProducts.length > 0 && (
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row}
          data={allProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProductItem}
        />
      )}

      <View style={styles.row}>
        {/* <SmallButton
          title="Preview"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        /> */}
        <SmallButton
          loader={loader}
          onPress={handleSubmit}
          title="Submit"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
};

export default AddDeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1%',
  },
  btnStyle: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    padding: 14,
    width: '100%',
    marginHorizontal: 0,
    marginTop: '2%',
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: SOLID_BLACK,
  },
});
