import moment from 'moment';
import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-gesture-handler';

import {useSelector} from 'react-redux';
import checkoutApi from '../../clients/checkoutApi';
import HeaderBack from '../../components/header-back/HeaderBack';
import Loading from '../../components/loading/Loading';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice from '../../utils';
import {HeaderAccount} from '../profile/ProfileScreen';

const OrderItem = ({item, onFetch}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState([]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDetails = async idOrder => {
    setModalVisible(true);
    try {
      const res = await checkoutApi.getOrdersDetals(idOrder);
      setDetails(res.data.orders);
    } catch (error) {}
  };

  const handleCancel = async idOrder => {
    try {
      const res = await checkoutApi.deleteOrder(idOrder);
      onFetch();
    } catch (error) {}
  };
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.07)',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
      }}>
      <View>
        <Text
          style={{
            fontWeight: '600',
          }}>
          Ngày đặt: {moment(item?.orderDate).format('DD-MM-YYYY - HH:MM:SS')}
        </Text>
        <Text
          style={{
            fontWeight: '600',
          }}>
          Địa chỉ: {item.address}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '600',
        }}>
        Tổng tiền: {formatPrice(item.totalPrice)}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text>Tình trạng:</Text>
        <Text
          style={{
            fontWeight: '700',
            color: COLOR.primary,
          }}>
          {item.statusOrder === 0 ? ' Chưa xác xác nhận' : ' Đã xác nhận'}
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 5,
        }}>
        {item.statusOrder === 0 && (
          <TouchableOpacity onPress={() => handleCancel(item.idOrder)}>
            <Text
              style={{
                backgroundColor: '#c1c1c1',
                marginRight: 10,
                padding: 7,
                borderRadius: 5,
              }}>
              Hủy
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => handleDetails(item.idOrder)}>
          <Text
            style={{
              backgroundColor: COLOR.blue,
              marginRight: 5,
              padding: 7,
              borderRadius: 5,
              color: COLOR.while,
            }}>
            Xem chi tiết
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal isVisible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {details.map((item, index) => (
                <View style={styles.boxCart} key={index}>
                  <ImageBackground
                    style={styles.image}
                    source={{
                      uri:
                        item.thumbnailUrl ||
                        'https://www.invert.vn/media/downloads/221203T1328_631.jpg',
                    }}
                  />
                  <View style={styles.boxInfo}>
                    <Text
                      style={{
                        color: COLOR.primary,
                        fontSize: 18,
                        paddingBottom: 5,
                        height: 50,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: COLOR.black,
                        fontSize: 16,
                      }}>
                      Giá: {formatPrice(item.price)}
                    </Text>
                    <Text
                      style={{
                        color: COLOR.black,
                        fontSize: 16,
                      }}>
                      Số lượng: {item.quantity}
                    </Text>
                  </View>
                </View>
              ))}
              <Button title="Đóng" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const MyOrders = ({navigation}) => {
  const [listOrder, setListOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [active, setActive] = React.useState(-1);
  const {
    user: {user},
  } = useSelector(state => state.auth);

  const fetchData = async () => {
    try {
      const res = await checkoutApi.getOrdersUser(user.idUser, {
        statusOrder: active,
      });
      setListOrder(res.data.orders);
      setIsLoading(false);
    } catch (error) {}
  };

  React.useEffect(() => {
    fetchData();
  }, [active]);
  return (
    <View>
      <HeaderBack
        title="Đơn hàng của tôi"
        name={PathName.profile}
        onPressBack={name => navigation.navigate(name)}
      />
      <HeaderAccount user={user} />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (active === -1) return;
            setActive(-1);
          }}>
          <Text
            style={{
              backgroundColor: active === -1 ? COLOR.blue : 'rgba(0,0,0,0.1)',
              color: active === -1 ? COLOR.while : COLOR.black,
              paddingHorizontal: 20,
              fontSize: 15,
              paddingVertical: 5,
              borderRadius: 10,
            }}>
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (active === 0) return;
            setActive(0);
          }}>
          <Text
            style={{
              backgroundColor: active === 0 ? COLOR.blue : 'rgba(0,0,0,0.1)',
              color: active === 0 ? COLOR.while : COLOR.black,
              paddingHorizontal: 20,
              fontSize: 15,
              paddingVertical: 5,
              borderRadius: 10,
            }}>
            Chờ xác nhận
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (active === 1) return;
            setActive(1);
          }}>
          <Text
            style={{
              backgroundColor: active === 1 ? COLOR.blue : 'rgba(0,0,0,0.1)',
              color: active === 1 ? COLOR.while : COLOR.black,
              paddingHorizontal: 20,
              fontSize: 15,
              paddingVertical: 5,
              borderRadius: 10,
            }}>
            Đã nhận
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <SafeAreaView>
          <ScrollView>
            <View
              style={{
                padding: 15,
                backgroundColor: COLOR.while,
                marginBottom: 200,
              }}>
              {listOrder.length > 0 ? (
                <>
                  {listOrder.map(item => (
                    <OrderItem
                      item={item}
                      key={item.orderDate}
                      onFetch={fetchData}
                    />
                  ))}
                </>
              ) : (
                <Text>Chưa có đơn hàng nào </Text>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  boxCart: {
    width: '100%',
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,

    elevation: 1,
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: 90,
    margin: 5,
    height: 90,
    marginRight: 10,
  },
  boxInfo: {
    flex: 0.9,
  },
  checkbox: {
    // alignSelf: 'center',
  },
});
