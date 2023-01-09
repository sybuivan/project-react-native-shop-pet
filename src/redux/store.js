import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authSlice from '../screens/auth/authSlice';
import cartReducer from '../screens/cart/cartSlice';
const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
