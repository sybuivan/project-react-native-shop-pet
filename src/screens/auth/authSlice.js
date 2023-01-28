import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import authApi from '../../clients/authApi';

export const loginUser = createAsyncThunk('auth/loginUser', async payload => {
  const response = await authApi.login(payload);
  return response.data;
});
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    logout(state) {
      state.user = null;
    },
    setUser: (state, action) => {
      const oldUser = state.user;
      state.user.address = action.payload.address;
      state.user.phone = action.payload.phone;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

const {reducer, actions} = authSlice;
export const {logout, setUser} = actions;
export default reducer;
