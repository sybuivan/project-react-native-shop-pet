import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLOR from '../../constants/Color';
import {ImageOverlay} from '../image-overlay/ImageOverlay';

const CategoryCard = props => {
  const {style, category, navigation, onPressCategory} = props;
  return (
    <>
      <View>
        <ImageOverlay
          style={[style, styles.container, styles.image]}
          source={category.image}>
          <Text style={styles.title}>{category.title}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListProductScreen')}>
            <Text
              style={{
                backgroundColor: COLOR.primary,
                padding: 10,
                fontSize: 20,
                width: 100,
                textAlign: 'center',
                color: COLOR.while,
                borderRadius: 10,
              }}>
              Chi tiet
            </Text>
          </TouchableOpacity>
        </ImageOverlay>
      </View>
    </>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
  },

  image: {
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  level: {
    zIndex: 1,
  },
  title: {
    zIndex: 1,
    fontSize: 30,
    color: COLOR.while,
    fontWeight: 'bold',
  },
  durationButton: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    borderRadius: 16,
    paddingHorizontal: 0,
  },
});
