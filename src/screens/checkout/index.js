import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  _View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import checkoutApi from '../../clients/checkoutApi';
import HeaderBack from '../../components/header-back/HeaderBack';
import Loading from '../../components/loading/Loading';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice from '../../utils';
import CartItems from '../cart/CartItems';
import {totalPriceCartItems} from '../cart/cartSelector';
import {getCarts} from '../cart/cartSlice';

const CheckoutScreen = ({navigation, route}) => {
  const {carts, totalPrice} = route.params;
  const {loading} = useSelector(state => state.cart);
  const {
    user: {user},
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleOnSubmit = async () => {
    const address = 'Lac Son - Gio Son - Gio Linh - Quang Tri';

    try {
      const params = {
        totalPrice,
        address,
        userId: user.idUser,
      };
      await checkoutApi.payMethod(params);
      const res = await checkoutApi.getIdOrder();
      if (res) {
        const idOrder = res.data.result[0].idOrder;
        console.log(idOrder);
        await checkoutApi
          .orderDetails({cartList: carts, idOrder: idOrder})
          .then(() => {
            Toast.show({
              type: 'success',
              text1: 'Thông báo',
              text2: 'Đơn hàng xác nhận thành công 👋',
            });
          });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Thông báo',
        text2: 'Đơn hàng xác nhận thành công 👋',
      });
    }
  };

  return (
    <React.Fragment>
      <HeaderBack
        title={`Tiến hành xác nhận`}
        name={PathName.home}
        onPressBack={name => navigation.navigate(name)}
      />
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={{flex: 1, margin: 5}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 5,
                backgroundColor: COLOR.while,
              }}>
              {carts.length <= 0 && (
                <Text
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    padding: 10,
                    fontSize: 20,
                    fontWeight: '700',
                  }}>
                  Chưa có sản phầm
                </Text>
              )}
              {carts.map((cart, index) => (
                <CartItems
                  key={index}
                  cart={cart}
                  navigation={navigation}
                  isView={false}
                />
              ))}
            </View>
          </ScrollView>
          <View style={styles.boxInfo}>
            <View>
              <Text
                style={{
                  color: COLOR.primary,
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Thông tin người nhận
              </Text>
              <View style={styles.textInfoBox}>
                <Text>Tên người nhận:</Text>
                <Text
                  style={{
                    fontWeight: '600',
                    color: COLOR.black,

                    marginLeft: 10,
                  }}>
                  {user.fullName}
                </Text>
              </View>
              <View style={styles.textInfoBox}>
                <Text>Số điện thoại:</Text>
                <Text
                  style={{
                    fontWeight: '600',
                    marginLeft: 10,
                    color: COLOR.black,
                  }}>
                  {user?.phone || '0933993333'}
                </Text>
              </View>
              <View style={styles.textInfoBox}>
                <Text>Địa chỉ:</Text>
                <Text
                  style={{
                    fontWeight: '600',
                    marginLeft: 10,
                    color: COLOR.black,
                  }}>
                  {user?.phone || 'Lac Son - Gio Son - Gio Linh - Quang Tri'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.boxPay}>
            <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
              <Text style={styles.text}>Xác nhận thanh toán</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </React.Fragment>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  boxInfo: {backgroundColor: COLOR.while, padding: 8, marginBottom: 10},
  textInfoBox: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  boxPay: {
    height: 60,
    backgroundColor: COLOR.while,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLOR.while,
    textAlign: 'center',
    padding: 8,
    fontWeight: '800',
  },
  button: {
    borderRadius: 8,
    height: 40,
    backgroundColor: COLOR.primary,
  },
});
