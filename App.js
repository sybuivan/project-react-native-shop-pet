import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/screens/auth/LoginSreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ListProduct from './src/screens/list-product/ListProduct';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListProductScreen" component={ListProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
