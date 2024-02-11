import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemFromAsyncStorage = async itemKey => {
  const item = await AsyncStorage.getItem(itemKey);
  return item;
};

export const saveItemInAsyncStorage = async (itemKey, itemValue) => {
  try {
    await AsyncStorage.setItem(itemKey, itemValue);
  } catch (e) {
    console.log(`Error while setting key ${itemKey} in storage`, e);
  }
};

export const removeItemFromAsyncStorage = async itemKey => {
  if (!itemKey) {
    return;
  }

  try {
    await AsyncStorage.removeItem(itemKey);
  } catch (e) {
    console.log(`Error while removing key ${itemKey} from storage`, e);
  }
};
