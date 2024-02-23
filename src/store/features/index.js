import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import dealReducer from './dealSlice';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  deal: dealReducer,
});
