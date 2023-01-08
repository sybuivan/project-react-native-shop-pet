import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice from '../../utils';

const xmldelete = `<svg width="800px" height="800px" viewBox="-5.1 0 85.5 85.5" xmlns="http://www.w3.org/2000/svg">
<g id="Group_14" data-name="Group 14" transform="translate(-837.1 -670)">
  <path id="Path_40" data-name="Path 40" d="M905.8,703.3H843.7a4.653,4.653,0,0,1-4.6-4.6v-9.2a4.653,4.653,0,0,1,4.6-4.6h62.1a4.653,4.653,0,0,1,4.6,4.6v9.2A4.653,4.653,0,0,1,905.8,703.3Z" fill="none" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="4"/>
  <path id="Path_41" data-name="Path 41" d="M901.6,706v41c-.7.5-3.2,1.9-10,3.1a108.881,108.881,0,0,1-17.2,1.5,92.907,92.907,0,0,1-16.8-1.5c-6.6-1.2-8.9-2.5-9.6-3V706h53.6m4-4H844v45.7c0,5.3,18.5,7.8,30.4,7.8s31.2-2.5,31.2-7.8V702Z" fill="#2b4ea2"/>
  <line id="Line_17" data-name="Line 17" y2="11.9" transform="translate(862.7 721.6)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
  <line id="Line_18" data-name="Line 18" y2="18.9" transform="translate(874.9 718.1)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
  <line id="Line_19" data-name="Line 19" y2="11.9" transform="translate(886.9 721.6)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
  <path id="Path_42" data-name="Path 42" d="M859,684.2S857.3,672,873.9,672s16.7,12.2,16.7,12.2" fill="none" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="4"/>
</g>
</svg>`;

const xmlMinus = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="style=doutone">
<g id="minus">
<path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M18.9069 12.001C18.9069 12.4152 18.5711 12.751 18.1569 12.751L5.84071 12.7509C5.4265 12.7509 5.09072 12.4151 5.09072 12.0009C5.09072 11.5867 5.42651 11.2509 5.84072 11.2509L18.1569 11.251C18.5711 11.251 18.9069 11.5868 18.9069 12.001Z" fill="#000000"/>
</g>
</g>
</svg>`;
const xmlPlus = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19M5 12H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const CartItems = ({cart, navigation, onDelete}) => {
  const {name, price, thumbnailUrl, quantity, codeCart} = cart;
  console.log(cart);
  const handleDelete = () => {
    onDelete(codeCart);
  };

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
            height: 50,
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
        <Text
          style={{
            color: COLOR.black,
            fontSize: 16,
          }}>
          Số lượng: {quantity}
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.boxPlus}>
          <TouchableOpacity
            style={styles.iconPlus}
            onPress={() => {
              if (quantity <= 1) return;
            }}>
            <SvgXml width={20} height={20} xml={xmlMinus} />
          </TouchableOpacity>
          <View style={styles.iconPlus}>
            <Text style={styles.textPlus}>{quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconPlus}
            onPress={() => {
              console.log('hahh');
            }}>
            <SvgXml width={20} height={20} xml={xmlPlus} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <SvgXml width={25} height={25} xml={xmldelete} />
        </TouchableOpacity>
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
    shadowOpacity: 0.2,
    shadowRadius: 2.22,

    elevation: 1,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 90,
    margin: 10,
    height: 90,
    marginRight: 10,
  },
  boxInfo: {
    flex: 0.9,
  },
  checkbox: {
    // alignSelf: 'center',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconPlus: {
    padding: 5,
  },
  boxPlus: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 5,
  },
  textPlus: {
    textAlign: 'center',
    fontSize: 18,
    color: COLOR.primary,
  },
});
