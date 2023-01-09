import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import checkoutApi from '../../clients/checkoutApi';
import HeaderBack from '../../components/header-back/HeaderBack';
import Loading from '../../components/loading/Loading';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice from '../../utils';
import CartItems from './CartItems';
import {totalPriceCartItems} from './cartSelector';
import {getCarts} from './cartSlice';

const CartScreen = ({navigation, route}) => {
  const {number} = route.params;
  const totalPrice = useSelector(totalPriceCartItems);
  const {carts, loading} = useSelector(state => state.cart);
  const {
    user: {user},
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCarts(user.idUser));
  }, [number]);

  const handleOnDelete = async idProduct => {
    try {
      const res = await checkoutApi.deleteCart({
        idUser: user.idUser,
        idProduct,
      });
      dispatch(getCarts(user.idUser));
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <HeaderBack
        title={`Tổng Tiền: ${formatPrice(totalPrice)}`}
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
                  onDelete={handleOnDelete}
                  navigation={navigation}
                  isView={true}
                />
              ))}
            </View>
          </ScrollView>
          {carts.length > 0 && (
            <View style={styles.boxPay}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate(PathName.checkout, {
                    carts: carts,
                    totalPrice: totalPrice,
                  })
                }>
                <Text style={styles.text}>Thanh toán</Text>
              </TouchableOpacity>
            </View>
          )}
        </SafeAreaView>
      )}
    </React.Fragment>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
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
  },
  button: {
    borderRadius: 8,
    width: 100,
    height: 40,
    backgroundColor: COLOR.primary,
  },
});
