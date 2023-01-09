import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import {logout} from '../auth/authSlice';

const xmllogout = `<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
<path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"/>
</svg>`;
const xmlbook = `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>book-blank</title>
<path d="M27.75 2c-0-0.414-0.336-0.75-0.75-0.75h-19.8c-0.028-0.001-0.061-0.002-0.094-0.002-1.541 0-2.797 1.22-2.856 2.746l-0 0.005v24.389c0.113 1.331 1.221 2.367 2.572 2.367 0.063 0 0.125-0.002 0.187-0.007l-0.008 0h20c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-19.8c-0.023 0.001-0.050 0.002-0.077 0.002-0.717 0-1.306-0.547-1.373-1.247l-0-0.006v-1.223c0-0.459 0.584-0.861 1.248-0.861l20.002 0.057c0 0 0.001 0 0.001 0 0.207 0 0.394-0.084 0.529-0.22l0-0c0.017-0.017 0.025-0.041 0.040-0.060 0.047-0.051 0.087-0.11 0.118-0.173l0.002-0.004c0.016-0.049 0.029-0.105 0.034-0.164l0-0.003c0.011-0.035 0.020-0.077 0.025-0.121l0-0.003v-0.002zM26.25 24.471l-15.5-0.044v-21.677h15.5zM5.75 24.686v-20.686c0.067-0.705 0.657-1.252 1.374-1.252 0.027 0 0.054 0.001 0.080 0.002l-0.004-0h2.050v21.672l-2.25-0.006c-0.453 0.002-0.883 0.101-1.269 0.278l0.019-0.008z"></path>
</svg>`;

const xmlsetting = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="style=linear">
<g id="setting">
<path id="vector" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="vector_2" d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>`;
const xmlcheck = `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="check-mark-square-2" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><polyline id="primary" points="21 5 12 14 8 10" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><path id="primary-2" data-name="primary" d="M21,11v9a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>`;

const ProfileScreen = ({navigation}) => {
  const image = require('../../assets/images/avt-df.png');
  const {
    user: {user},
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <View style={styles.boxHeader}>
        <View style={styles.image}>
          <ImageBackground source={image} style={styles.imageBk} />
        </View>
        <View>
          <Text style={styles.text}>{user.fullName}</Text>
          <Text style={styles.textMail}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.list}>
        <TouchableOpacity style={styles.item}>
          <SvgXml height={25} width={25} xml={xmlsetting} />

          <Text style={styles.itemText}>Thiết lập tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <SvgXml height={25} width={25} xml={xmlcheck} />

          <Text style={styles.itemText}>Đơn hàng của tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <SvgXml height={25} width={25} xml={xmlbook} />
          <Text style={styles.itemText}>Đơn hàng đã giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <SvgXml height={25} width={25} xml={xmllogout} />
          <TouchableOpacity
            onPress={() => {
              dispatch(logout());
            }}>
            <Text style={styles.itemText}>Đăng xuất</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  boxHeader: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR.primary,
    borderBottomWidth: 2,
  },
  image: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 10,
  },
  imageBk: {
    width: 70,
    height: 70,
  },
  text: {
    fontSize: 18,
  },
  textMail: {
    fontSize: 16,
  },

  list: {},
  item: {
    padding: 14,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 18,
    paddingLeft: 10,
  },
});
