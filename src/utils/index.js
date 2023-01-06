import {Text} from 'react-native';
import Toast from 'react-native-toast-message';

export default function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
}

export function Toastify({type, text1, text2}) {
  return Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
}

export const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {},
  );
