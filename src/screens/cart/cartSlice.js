import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import checkoutApi from '../../clients/checkoutApi';
import {groupBy, totalQuantity} from '../../utils';

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
    builder
      .addCase(getCarts.fulfilled, (state, action) => {
        const newCarts = action.payload;
        const data = groupBy(newCarts, 'idProduct');
        const newProduct = [];
        for (const [key, value] of Object.entries(data)) {
          const total = value.map(item => item.quantity);
          const quantity = total.reduce((partialSum, a) => partialSum + a, 0);
          newProduct.push({
            ...value[0],
            quantity,
          });
        }
        state.carts = newProduct;
        state.loading = false;
      })
      .addCase(getCarts.pending, state => {
        state.loading = true;
      });
  },
});

const {reducer, actions} = cartSlice;

export const {} = actions;
export default reducer;
