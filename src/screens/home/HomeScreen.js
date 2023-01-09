import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryCard from '../../components/category-card/CategoryCard';
import COLOR from '../../constants/Color';
import logo from '../../assets/images/logo.jpg';

const dataCategory = [
  {
    image: require('../../assets/images/dog.jpg'),
    title: 'Chó cảnh',
    key: '1',
    id: 1,
  },
  {
    image: require('../../assets/images/meo-canh.jpg'),
    title: 'Mèo cảnh',
    key: '2',
    id: 2,
  },
  {
    image: require('../../assets/images/Hamster.jpg'),
    title: 'Hamster',
    key: '3',
    id: 3,
  },
  {
    image: require('../../assets/images/tho-canh.jpg'),
    title: 'Thỏ',
    key: '4',
    id: 4,
  },
  {
    image: require('../../assets/images/phu-kien.jpg'),
    title: 'Phụ kiện',
    key: '5',
    id: 5,
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titleHeader}>Trang chủ</Text>
      </View>

      <SafeAreaView
        style={{
          marginBottom: 100,
        }}>
        <ScrollView>
          {dataCategory.map(item => (
            <CategoryCard
              style={styles.verticalItem}
              category={item}
              navigation={navigation}
              key={item.key}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  header: {
    backgroundColor: COLOR.while,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleHeader: {
    fontWeight: '500',
    color: COLOR.primary,
    fontSize: 20,
    alignItems: 'center',
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
});
