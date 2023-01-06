import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import checkoutApi from '../../clients/checkoutApi';
import {groupBy} from '../../utils';

export const addToCart = createAsyncThunk('cart/addToCart', async payload => {
  const response = await checkoutApi.addToCart(payload);
  return response.data.result;
});
export const getCarts = createAsyncThunk('cart/getCarts', async payload => {
  const response = await checkoutApi.getCartIdUser(payload);
  return response.data.result;
});
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    loading: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCarts.fulfilled, (state, action) => {
      const newCarts = action.payload;
      const data = groupBy(newCarts, 'idProduct');
      console.log('data', data);
      state.carts = action.payload;
      state.loading = false;
    });
  },
});

const {reducer, actions} = cartSlice;

export const {} = actions;
export default reducer;
