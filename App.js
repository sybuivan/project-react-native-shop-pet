import React, {Fragment} from 'react';
import {StyleSheet, View, Text, Image, ProgressBarAndroid} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';

import LoginScreen from './src/screens/auth/LoginSreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ListProduct from './src/screens/list-product/ListProduct';
import DetailsScreen from './src/screens/details/DetailsScreen';
import {PathName} from './src/constants/PathNameScreen';

import store from './src/redux/store';
import COLOR from './src/constants/Color';
import CartScreen from './src/screens/cart/CartScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import {countCartItems} from './src/screens/cart/cartSelector';
import {toastConfig} from './src/constants/ToastConfig';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homexml = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="-1.5 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28.8496C0 30.5896 1.41049 32 3.15041 32H25.2032C26.9432 32 28.3537 30.5896 28.3537 28.8496V13.0282C28.3537 12.1326 27.9725 11.2793 27.3054 10.6817L16.2789 0.803877C15.0825 -0.267959 13.2712 -0.267959 12.0747 0.803877L1.0483 10.6817C0.381205 11.2793 0 12.1326 0 13.0282V28.8496Z" fill="url(#paint0_linear_103_1796)"/>
<path d="M9.45122 32H18.9024V20.9736C18.9024 20.1036 18.1972 19.3984 17.3272 19.3984H11.0264C10.1565 19.3984 9.45122 20.1036 9.45122 20.9736V32Z" fill="white" fill-opacity="0.48"/>
<defs>
<linearGradient id="paint0_linear_103_1796" x1="14.1768" y1="32" x2="14.1768" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#E84909"/>
<stop offset="1" stop-color="#FF6200"/>
</linearGradient>
</defs>
</svg>`;

const cartxml = `<svg width="800px" height="800px" viewBox="0 -0.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3147 30.9442C11.9424 30.9442 13.2618 29.6247 13.2618 27.9971C13.2618 26.3695 11.9424 25.05 10.3147 25.05C8.68712 25.05 7.36768 26.3695 7.36768 27.9971C7.36768 29.6247 8.68712 30.9442 10.3147 30.9442Z" fill="#FF4D00"/>
<path d="M26.5232 30.9442C28.1509 30.9442 29.4703 29.6247 29.4703 27.9971C29.4703 26.3695 28.1509 25.05 26.5232 25.05C24.8956 25.05 23.5762 26.3695 23.5762 27.9971C23.5762 29.6247 24.8956 30.9442 26.5232 30.9442Z" fill="#FF4D00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.526 5.89412H7.44717L6.60911 2.28116C6.45421 1.61335 6.1084 1.0662 5.57167 0.63972C5.03494 0.21324 4.42381 0 3.73827 0H1.47353C0.659722 0 0 0.659722 0 1.47353C0 2.28733 0.659722 2.94706 1.47353 2.94706H3.73827L4.42186 5.89412H4.42059L8.21564 22.4326C8.29244 22.7673 8.46515 23.0416 8.73378 23.2556C9.0024 23.4695 9.30842 23.5765 9.65183 23.5765H26.8066C27.1441 23.5765 27.4459 23.4728 27.7121 23.2654C27.9783 23.0581 28.1527 22.7908 28.2354 22.4635L31.9547 7.72829C32.0103 7.50802 32.0147 7.28674 31.968 7.06443C31.9212 6.84212 31.828 6.64136 31.6884 6.46214C31.5488 6.28293 31.377 6.14345 31.1728 6.04372C30.9688 5.94399 30.7532 5.89412 30.526 5.89412Z" fill="url(#paint0_linear_103_1445)"/>
<g style="mix-blend-mode:hard-light">
<g style="mix-blend-mode:hard-light">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.95667 10.7179C8.94284 10.661 8.93245 10.6034 8.91504 10.5453C8.91504 10.4871 8.91504 10.4287 8.91504 10.3701C8.91504 9.96323 9.0589 9.61592 9.34663 9.32819C9.63435 9.04047 9.98167 8.89661 10.3886 8.89661C10.7285 8.89661 11.0321 9.00165 11.2993 9.21174C11.5665 9.42183 11.7402 9.69203 11.8205 10.0224L13.9565 18.817L13.9567 18.8175C13.9705 18.8744 13.9809 18.932 13.9878 18.9901C13.9948 19.0483 13.9983 19.1067 13.9983 19.1653C13.9983 19.5722 13.8544 19.9195 13.5667 20.2072C13.279 20.4949 12.9317 20.6388 12.5248 20.6388C12.1848 20.6388 11.8813 20.5338 11.614 20.3237C11.3468 20.1136 11.1731 19.8434 11.0929 19.5131L8.95667 10.7179ZM17.6405 10.059C17.5603 9.72864 17.3865 9.45844 17.1193 9.24835C16.8521 9.03826 16.5485 8.93321 16.2086 8.93321C15.8017 8.93321 15.4544 9.07707 15.1666 9.3648C14.8789 9.65252 14.7351 9.99984 14.7351 10.4067C14.7351 10.4653 14.7385 10.5237 14.7455 10.5819C14.7525 10.64 14.7629 10.6976 14.7767 10.7545L16.9129 19.5497C16.9931 19.88 17.1668 20.1502 17.4341 20.3603C17.7013 20.5704 18.0049 20.6754 18.3448 20.6754C18.7517 20.6754 19.099 20.5315 19.3867 20.2438C19.6744 19.9561 19.8183 19.6088 19.8183 19.2019C19.8183 19.1433 19.8148 19.0849 19.8079 19.0267C19.8009 18.9686 19.7905 18.911 19.7767 18.8541L19.7766 18.8536L17.6405 10.059Z" fill="white" fill-opacity="0.6"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_103_1445" x1="0" y1="0" x2="19.7144" y2="29.6608" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB300"/>
<stop offset="1" stop-color="#FF4900"/>
</linearGradient>
</defs>
</svg>`;

const userxml = `<svg width="181px" height="181px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_iconCarrier"> <path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f46b10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>`;

const StackNavigate = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PathName.login} component={LoginScreen} />
      <Stack.Screen name={PathName.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const StackHomeNavigate = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PathName.home} component={HomeScreen} />
      <Stack.Screen name={PathName.listProduct} component={ListProduct} />
      <Stack.Screen name={PathName.details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigate = () => {
  const countCart = useSelector(countCartItems);

  const customTabBarStyle = {
    activeTintColor: '#0091EA',
    inactiveTintColor: 'gray',
    style: {backgroundColor: 'white'},
  };
  return (
    <Tab.Navigator
      activeColor={COLOR.primary}
      options={{headerShown: false}}
      initialRouteName={PathName.home}
      screenOptions={{
        tabBarActiveTintColor: COLOR.primary,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name={PathName.home}
        component={StackHomeNavigate}
        options={{
          tabBarLabel: ({color}) => (
            <Text
              style={{
                fontWeight: '600',
                color: color,
              }}>
              Trang chủ
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <SvgXml width={30} height={30} xml={homexml} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        initialParams={{number: 45}}
        name={PathName.cart}
        component={CartScreen}
        navigationOptions={{
          header: null,
        }}
        options={{
          tabBarLabel: ({color}) => (
            <Text
              style={{
                color: color,
                fontWeight: '600',
              }}>
              Giỏ hàng
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <View style={styles.cart}>
              <SvgXml width={30} height={30} xml={cartxml} />
              <View style={styles.cartAb}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLOR.while,
                    fontWeight: '700',
                  }}>
                  {countCart}
                </Text>
              </View>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={PathName.profile}
        component={ProfileScreen}
        navigationOptions={{
          header: null,
        }}
        options={{
          tabBarLabel: ({color}) => (
            <Text
              style={{
                fontWeight: '600',
                color: color,
              }}>
              Tôi
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <View style={styles.cart}>
              <SvgXml width={30} height={30} xml={userxml} />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigate = () => {
  const {user} = useSelector(state => state.auth);
  return <>{user?.token ? <TabNavigate /> : <StackNavigate />}</>;
};

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <NavigationContainer>{<MainNavigate />}</NavigationContainer>
        <Toast config={toastConfig} />
      </Fragment>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  cart: {
    position: 'relative',
    marginTop: 10,
  },
  cartAb: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: -5,
    right: -15,
    borderRadius: 30,
    backgroundColor: COLOR.primary,
  },
});
