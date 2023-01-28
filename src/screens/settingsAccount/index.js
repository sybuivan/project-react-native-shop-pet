import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';

import {useDispatch, useSelector} from 'react-redux';
import authApi from '../../clients/authApi';
import HeaderBack from '../../components/header-back/HeaderBack';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import {setUser} from '../auth/authSlice';
import {HeaderAccount} from '../profile/ProfileScreen';

const SettingsAccount = ({navigation}) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isErrorAddress, setIsErrorAddress] = useState(false);
  const [isErrorPhone, setIsErrorPhone] = useState(true);
  const dispatch = useDispatch();
  const {
    user: {user},
  } = useSelector(state => state.auth);
  console.log('users', user);

  useEffect(() => {
    if (!address) {
      setIsErrorAddress(true);
    } else {
      setIsErrorAddress(false);
    }
    if (!phone) {
      setIsErrorPhone(true);
    } else {
      setIsErrorPhone(false);
    }
  }, [phone, address]);

  useEffect(() => {
    setAddress(user.address);
    setPhone(user.phone);
  }, []);

  const handleSettings = async () => {
    try {
      const res = await authApi.updateUser({
        phone,
        address,
        idUser: user.idUser,
      });
      console.log(res.data.user);
      dispatch(setUser(res.data.user));
      Toast.show({
        type: 'success',
        text1: 'Thông báo',
        text2: 'Chỉnh sửa thông tin thành công',
      });
    } catch (error) {}
  };

  return (
    <View>
      <HeaderBack
        title="Thiết lập tài khoản"
        name={PathName.profile}
        onPressBack={name => navigation.navigate(name)}
      />
      <HeaderAccount user={user} />

      <View
        style={{
          padding: 20,
        }}>
        <View
          style={
            isErrorPhone
              ? {
                  borderBottomColor: 'red',
                  borderBottomWidth: 2,
                  marginBottom: 25,
                }
              : {
                  borderBottomColor: '#c1c1c1',
                  borderBottomWidth: 2,
                  marginBottom: 25,
                }
          }>
          <Text>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setPhone(value)}
            value={phone}
            keyboardType="phone-pad"
            dataDetectorTypes="phoneNumber"
            disableFullscreenUI={true}
            placeholder="Nhập số điện thoại"
            maxLength={11}
          />
        </View>
        <View
          style={
            isErrorAddress
              ? {
                  borderBottomColor: 'red',
                  borderBottomWidth: 2,
                  marginBottom: 25,
                }
              : {
                  borderBottomColor: '#c1c1c1',
                  borderBottomWidth: 2,
                  marginBottom: 25,
                }
          }>
          <Text>Địa chỉ</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setAddress(value)}
            value={address}
            placeholder="Nhập địa chỉ"
          />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 8,
        }}>
        <TouchableOpacity
          onPress={handleSettings}
          disabled={phone && address ? false : true}
          style={{
            backgroundColor: phone && address ? COLOR.primary : '#c1c1c1',
            padding: 15,
            borderRadius: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: COLOR.while,
              fontWeight: '700',
            }}>
            Lưu thông tin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsAccount;

const styles = StyleSheet.create({
  input: {padding: 10},
  boxInput: {
    borderBottomColor: '#c1c1c1',
    borderBottomWidth: 3,
    marginBottom: 25,
  },
});
