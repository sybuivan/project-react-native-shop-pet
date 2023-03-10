import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import {ImageOverlay} from '../image-overlay/ImageOverlay';

const CategoryCard = props => {
  const {style, category, navigation} = props;
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(PathName.listProduct, {
            title: category.title,
            id: category.id,
          })
        }>
        <ImageOverlay
          style={[style, styles.container, styles.image]}
          source={category.image}>
          <Text style={styles.title}>{category.title}</Text>
        </ImageOverlay>
      </TouchableOpacity>
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
