import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderBack from '../../components/header-back/HeaderBack';
import {PathName} from '../../constants/PathNameScreen';
import {HeaderAccount} from '../profile/ProfileScreen';

const SettingsAccount = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const {
    user: {user},
  } = useSelector(state => state.auth);
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
        <View style={styles.boxInput}>
          <Text>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setPhone(value)}
            value={phone}
            keyboardType="name-phone-pad"
            dataDetectorTypes="phoneNumber"
            disableFullscreenUI={true}
          />
        </View>
        <View style={styles.boxInput}>
          <Text>Địa chỉ</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setPhone(value)}
            value="093343333"
          />
        </View>
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
