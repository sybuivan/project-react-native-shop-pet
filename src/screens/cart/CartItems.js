import React from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import COLOR from '../../constants/Color';
import formatPrice from '../../utils';

const CartItems = ({cart}) => {
  const {name, price, thumbnailUrl} = cart;
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.boxCart}>
      <ImageBackground
        style={styles.image}
        source={{
          uri:
            thumbnailUrl ||
            'https://www.invert.vn/media/downloads/221203T1328_631.jpg',
        }}
      />
      <View style={styles.boxInfo}>
        <Text
          style={{
            color: COLOR.primary,
            fontSize: 18,
            paddingBottom: 5,
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: COLOR.black,
            fontSize: 16,
          }}>
          Giá: {formatPrice(price)}
        </Text>
        <View style={styles.checkboxContainer}></View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  boxCart: {
    width: '100%',
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2.22,

    elevation: 1,
    borderRadius: 10,
  },
  image: {
    width: 90,
    margin: 10,
    height: 90,
    marginRight: 10,
  },
  boxInfo: {
    flex: 1,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxContainer: {},
});
