import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CartIcon} from '../../components/icons/ICons';
import COLOR from '../../constants/Color';

const Card = ({data}) => {
  const onItemPress = index => {
    navigation && navigation.navigate('ProductDetail');
  };
  return (
    <View
      style={{
        width: '47%',
        margin: 5,
        borderColor: '#c1c1c1',
        borderStyle: 'solid',
        borderWidth: 1,
      }}>
      <ImageBackground style={styles.itemHeader} source={data.image} />
      <View
        style={{
          display: 'flex',
          padding: 10,
          borderBottomColor: '#c1c1c1',
          borderStyle: 'solid',
          borderBottomWidth: 2,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {data.title}
        </Text>
        <Text>{data.category}</Text>
      </View>
      <View style={styles.itemFooter}>
        <Text>{data.formattedPrice}</Text>
        <TouchableOpacity style={styles.iconButton}></TouchableOpacity>
      </View>
    </View>
  );
};

const ListProduct = () => {
  const data = {
    image: require('../../assets/images/meo-canh.jpg'),
    formattedPrice: 1000,
    title: 'Cho',
    category: 'Cho Canh',
  };
  return (
    <React.Fragment>
      <SafeAreaView style={{flex: 1, margin: 5}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default ListProduct;

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
    height: 140,
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
});
