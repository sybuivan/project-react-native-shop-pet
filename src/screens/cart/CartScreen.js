import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import HeaderBack from '../../components/header-back/HeaderBack';
import Loading from '../../components/loading/Loading';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice from '../../utils';
import CartItems from './CartItems';
import {totalPriceCartItems} from './cartSelector';
import {getCarts} from './cartSlice';
const CartScreen = ({navigation}) => {
  const totalPrice = useSelector(totalPriceCartItems);
  const {carts, loading} = useSelector(state => state.cart);
  const {
    user: {user},
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCarts(user.idUser));
  }, []);

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
              {carts.map((cart, index) => (
                <CartItems key={index} cart={cart} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </React.Fragment>
  );
};

export default CartScreen;
