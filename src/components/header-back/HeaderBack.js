import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import COLOR from '../../constants/Color';
const HeaderBack = ({onPressBack, title, name}) => {
  return (
    <View
      style={{
        backgroundColor: COLOR.while,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => onPressBack(name)}>
        <Text
          style={{
            padding: 8,
            backgroundColor: COLOR.while,
            width: 100,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600',
            borderColor: '#c1c1c1',
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: 5,
          }}>
          Quay lại
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: COLOR.primary,
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '700',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderBack;
