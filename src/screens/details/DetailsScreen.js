import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import productApi from '../../clients/productApi';
import HeaderBack from '../../components/header-back/HeaderBack';
import Loading from '../../components/loading/Loading';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice, {ramdomNumber, Toastify} from '../../utils';
import {addToCart} from '../cart/cartSlice';
import {useSelector} from 'react-redux';

const DetailsScreen = ({navigation, route}) => {
  const {idProduct, name, title} = route.params;
  const {
    user: {user},
  } = useSelector(state => state.auth);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await productApi.getDetailProduct(idProduct);
      setData(res.data.productDetail[0]);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [idProduct]);

  const handleSubmit = () => {
    console.log(user);
    const action = addToCart({
      idProduct: data.idProduct,
      quantity,
      idUser: user.idUser,
    });
    try {
      console.log(ramdomNumber(PathName.cart));
      dispatch(action).then(() => {
        Toast.show({
          type: 'success',
          text1: 'Thông báo',
          text2: 'Thêm vào giỏ hàng thành công 👋',
        });
        navigation.navigate(PathName.cart, {
          number: ramdomNumber(PathName.cart),
        });
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Thông báo',
        text2: 'Lỗi hệ thống :((',
      });
    }
  };

  return (
    <React.Fragment>
      <HeaderBack
        title="Chi tiết "
        name={PathName.listProduct}
        onPressBack={name =>
          navigation.navigate(name, {
            title: title,
            id: data.idCategory,
          })
        }
      />
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={{flex: 1, margin: 5}}>
          <ScrollView>
            <View
              style={{
                backgroundColor: COLOR.while,
                width: '100%',
              }}>
              <ImageBackground
                style={styles.itemHeader}
                source={{uri: data.thumbnailUrl}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  color: COLOR.black,
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                {name}
              </Text>
              <View
                style={{
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'center',
                    paddingBottom: 20,
                  }}>
                  Giá: {formatPrice(data.price)}
                </Text>

                <View style={styles.boxPlus}>
                  <TouchableOpacity
                    style={styles.iconPlus}
                    onPress={() => {
                      if (quantity <= 1) return;
                      setQuantity(quantity - 1);
                    }}>
                    <Text style={styles.textPlus}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.iconPlus}>
                    <Text style={styles.textPlus}>{quantity}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.iconPlus}
                    onPress={() => {
                      setQuantity(quantity + 1);
                      console.log('hahh');
                    }}>
                    <Text style={styles.textPlus}>+</Text>
                  </TouchableOpacity>

                  <View style={styles.boxPlus}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={{
                        backgroundColor: COLOR.blue,
                        padding: 15,
                        marginRight: 5,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          color: COLOR.while,
                        }}>
                        Thêm vào giỏ
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: COLOR.primary,
                        padding: 15,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          color: COLOR.while,
                        }}>
                        Mua ngay
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    paddingHorizontal: 20,
                  }}>
                  Mô tả: {data.descShort}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </React.Fragment>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1',
  },
  itemHeader: {
    height: 300,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  iconPlus: {
    padding: 5,
    width: 50,
    height: 50,
    borderColor: COLOR.black,
    borderStyle: 'dotted',
    borderWidth: 2,
  },
  boxPlus: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  textPlus: {
    textAlign: 'center',
    fontSize: 20,
  },
});
