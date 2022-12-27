import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from '../screens/auth/LoginSreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import CartScreen from '../screens/cart/CartScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import HomeScreen from '../screens/home/homeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const doNotShowHeaderOption = {
  navigationOptions: {
    header: null,
  },
};

const AppStack = createStackNavigator({
  SignIn: LoginScreen,
  SignUp: RegisterScreen,
  Home: HomeScreen,
  Details: DetailsScreen,
  Cart: CartScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
