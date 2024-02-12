import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  address: '',
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart.push(action.payload);
    },
    removeCart(state, action) {
      state.cart = state.cart.filter(el => el.id != action.payload);
    },
    updateCart(state, action) {
      state.cart = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setOrderTotal(state, action) {
      state.orderTotal = action.payload;
    },
  },
});

export const {setCart, removeCart, updateCart, setAddress, setOrderTotal} =
  cartSlice.actions;

export default cartSlice.reducer;
