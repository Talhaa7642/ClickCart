import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
