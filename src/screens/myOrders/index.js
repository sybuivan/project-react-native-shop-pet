import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderBack from '../../components/header-back/HeaderBack';
import {PathName} from '../../constants/PathNameScreen';
import {HeaderAccount} from '../profile/ProfileScreen';

const MyOrders = ({navigation}) => {
  const {
    user: {user},
  } = useSelector(state => state.auth);
  return (
    <View>
      <HeaderBack
        title="Đơn hàng của tôi"
        name={PathName.profile}
        onPressBack={name => navigation.navigate(name)}
      />
      <HeaderAccount user={user} />

      <Text>MyOrders</Text>
    </View>
  );
};

export default MyOrders;
