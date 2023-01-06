import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/auth/LoginSreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ListProduct from './src/screens/list-product/ListProduct';
import DetailsScreen from './src/screens/details/DetailsScreen';
import {PathName} from './src/constants/PathNameScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={PathName.login} component={LoginScreen} /> */}
        {/* <Stack.Screen name={PathName.register} component={RegisterScreen} /> */}
        <Stack.Screen name={PathName.home} component={HomeScreen} />
        <Stack.Screen name={PathName.listProduct} component={ListProduct} />
        <Stack.Screen name={PathName.details} component={DetailsScreen} />
        {/* <Stack.Screen name="ListProductScreen" component={TabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
