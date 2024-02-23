import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  deal: [],
  allProducts: [],
  dealTotal: 0,
};

const dealSlice = createSlice({
  name: 'dealSlice',
  initialState,
  reducers: {
    setDeal(state, action) {
      state.deal.push(action.payload);
    },
    removeDeal(state, action) {
      state.deal = state.deal.filter(el => el.id != action.payload);
    },
    updateProducts(state, action) {
      state.allProducts = action.payload;
    },
    updateDeal(state, action) {
      state.deal = action.payload;
    },
    setDealTotal(state, action) {
      state.dealTotal = action.payload;
    },
  },
});

export const {setDeal, removeDeal, updateProducts, updateDeal, setDealTotal} =
  dealSlice.actions;

export default dealSlice.reducer;
