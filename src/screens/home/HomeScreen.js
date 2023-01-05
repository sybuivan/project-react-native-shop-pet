import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryCard from '../../components/category-card/CategoryCard';
import {MenuIcon} from '../../components/icons/ICons';
import COLOR from '../../constants/Color';
import {Category} from './trainings';

const dataCategory = [
  {
    image: require('../../assets/images/dog.jpg'),
    title: 'Chó cảnh',
    key: '1',
  },
  {
    image: require('../../assets/images/meo-canh.jpg'),
    title: 'Mèo cảnh',
    key: '2',
  },
  {
    image: require('../../assets/images/chim-canh.jpg'),
    title: 'Chim cảnh',
    key: '3',
  },
  {
    image: require('../../assets/images/ca-canh.jpg'),
    title: 'Cá cảnh',
    key: '4',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Trang chủ</Text>
      </View>

      <SafeAreaView>
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
  header: {
    height: 50,
    backgroundColor: COLOR.while,
    padding: 10,
    width: 380,
    justifyContent: 'center',
    marginHorizontal: 17,
    marginBottom: 10,
  },
  titleHeader: {
    textAlign: 'center',
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
