import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import COLOR from '../../constants/Color';

const Loading = () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginLeft: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
        }}>
        Đang tải dữ liệu...
      </Text>
      <ActivityIndicator size="large" color={COLOR.primary} />
    </View>
  );
};

export default Loading;
