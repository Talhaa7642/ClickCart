import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {categoryRef, productRef, storage, storeRef} from '../../firebase';
import {addDoc, getDocs, onSnapshot, serverTimestamp} from 'firebase/firestore';

import {LIGHT_GREY1, MID_YELLOW, SOLID_BLACK} from '../../utils/colors';
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import SmallButton from '../../components/SmallButton';
import {EvilIcons} from '../../utils/icons';
import {useMedia} from '../../hooks/useMedia';
import Toast from 'react-native-simple-toast';
import DropDown from 'react-native-paper-dropdown';
import FastImage from 'react-native-fast-image';
import Loader from '../../components/Loader';

const AddProduct = () => {
  const {
    handleGetCameraPermission,
    handleGetGalleryPermission,
    image,
    setImage,
  } = useMedia();

  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [stock, setStock] = useState('');
  const [catName, setCatName] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [catList, setCatList] = useState([]);
  const [storeId, setStoreId] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (image.type != '') {
      setImages(prevState => [
        ...prevState,
        {...image, id: Math.floor(Math.random() * 899999 + 100000)},
      ]);
    }
  }, [image]);

  useLayoutEffect(() => {
    setLoader1(true);
    onSnapshot(categoryRef, snapshot => {
      let categories = [];
      snapshot.docs.forEach(el => {
        categories.push({
          label: el.data().name,
          value: el.data().name,
          id: el.id,
        });
      });
      setCatList(categories);
      setLoader1(false);
    });

    getDocs(storeRef)
      .then(snapshot => setStoreId(snapshot.docs[0].id))
      .catch(err => console.log('get store err', err));
  }, []);

  const handleAddCategory = () => {
    if (catName != '') {
      if (catList.every(el => el?.label != catName)) {
        setCatList([...catList, {label: catName, value: catName}]);
      }
      setCatName('');
    }
  };

  const handleSubmit = async () => {
    if (images.length < 3 || images.length > 8) {
      Toast.showWithGravity(
        'Please select between 3 to 8 images',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (
      name != '' &&
      price != '' &&
      stock != '' &&
      desc != '' &&
      selectedCat != '' &&
      catList.length > 0 &&
      image.type != ''
    ) {
      setLoader(true);
      try {
        const catPayload = {
          name: selectedCat,
          parentId: storeId,
          createdAt: serverTimestamp(),
        };

        const catRes = await addDoc(categoryRef, catPayload);

        let imgs = [];

        for (let i = 0; i < images.length; i++) {
          const imageRef = ref(storage, `images/product/${images[i].name}`);

          const response = await fetch(images[i].uri);
          const blob = await response.blob();

          const metadata = {
            contentType: images[i].type,
          };

          const imageRes = await uploadBytes(imageRef, blob, metadata);
          const url = await getDownloadURL(imageRes.ref);
          imgs.push(url);
        }

        const proPayload = {
          storeId,
          parentId: catRes.id,
          name,
          price,
          stock,
          description: desc,
          category: selectedCat,
          images: imgs,
          createdAt: serverTimestamp(),
        };

        await addDoc(productRef, proPayload);

        setName('');
        setPrice('');
        setStock('');
        setDesc('');
        setSelectedCat('');
        setImage({
          name: '',
          type: '',
          uri: '',
        });
        setImages([]);

        Toast.showWithGravity(
          'Product added successfully',
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } catch (err) {
        console.log('addDoc err', err);
      } finally {
        setLoader(false);
      }
    } else {
      Toast.showWithGravity(
        'Please add image, product name, category name and other remaining info',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    }
  };

  const renderItem = ({item}) => (
    <FastImage source={{uri: item.uri}} style={styles.img} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <Header title="Add Product" />

      {loader1 ? (
        <Loader indicatorStyle={styles.indicatorStyle} />
      ) : (
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.row}>
            <Text style={styles.txt}>Product</Text>
            <Text style={styles.txt}>0/255</Text>
          </View>

          <AppTextInput
            hideIcon
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            inputStyle={{marginBottom: '0.5%'}}
          />
          <AppTextInput
            hideIcon
            placeholder="Enter Quantity"
            value={stock}
            onChangeText={setStock}
            inputStyle={{marginBottom: '0.5%'}}
          />
          <AppTextInput
            hideIcon
            placeholder="Enter Price"
            value={price}
            onChangeText={setPrice}
            inputStyle={{marginBottom: '0.5%'}}
          />
          <AppTextInput
            hideIcon
            placeholder="Enter Description"
            value={desc}
            onChangeText={setDesc}
            inputStyle={{marginBottom: '4%'}}
          />

          <View style={styles.row}>
            <Text style={styles.txt}>Product Category</Text>
            <Text onPress={handleAddCategory} style={styles.txt}>
              Add
            </Text>
          </View>
          <AppTextInput
            hideIcon
            placeholder="Enter Name"
            value={catName}
            onChangeText={setCatName}
            inputStyle={{marginBottom: '4%'}}
          />

          <View
            style={{
              width: '100%',
              marginBottom: '2%',
            }}>
            <DropDown
              label="Category"
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={selectedCat}
              setValue={setSelectedCat}
              list={catList}
            />
          </View>

          <Text style={styles.txt1}>
            Tag your product in the right category to increase visibility when
            customer search
          </Text>

          <Text style={[styles.txt, {marginTop: '5%'}]}>Product Photos</Text>
          <Text style={styles.txt1}>
            Products with Good photos gets upto 5x more views and sales. Add
            between 3 to 8 photos, try to take different angles.Upload good
            quality pictures(Min 300x300)
          </Text>

          <View style={styles.row}>
            <Pressable style={styles.row1} onPress={handleGetGalleryPermission}>
              <EvilIcons name="image" size={30} color={SOLID_BLACK} />
              <Text style={styles.txt1}>Upload Photos</Text>
            </Pressable>

            <Pressable style={styles.row1} onPress={handleGetCameraPermission}>
              <EvilIcons name="camera" size={30} color={SOLID_BLACK} />
              <Text style={styles.txt1}>Upload Photos</Text>
            </Pressable>
          </View>

          {images.length > 0 && (
            <FlatList
              horizontal={true}
              contentContainerStyle={{flexDirection: 'row'}}
              data={images}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
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
        </ScrollView>
      )}
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
  img: {
    width: 100,
    height: 140,
    marginRight: 5,
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
