import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from '../../assets/images/logo.jpg';
import COLOR from '../../constants/Color';

const RegisterScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.blockBackground} />
      <View style={styles.boxContent}>
        <View style={styles.boxLogo}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.boxContentInput}>
          <View>
            <SafeAreaView>
              <View style={styles.boxInput}>
                <Text>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.boxInput}>
                <Text>Nhập mật khẩu</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <View style={styles.boxInput}>
                <Text>Nhập lại mật khẩu</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
            </SafeAreaView>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.textButton}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* View sign up */}
      <View style={styles.boxSignUp}>
        <View>
          <Text style={styles.text}>Bạn đã có tài khoản?</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonSign}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.textButton}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    position: 'relative',
  },
  blockBackground: {
    backgroundColor: COLOR.primary,
    height: 320,
  },
  boxContent: {
    position: 'absolute',

    backgroundColor: '#fff',
    top: 90,
    width: 380,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c1c1c1',
    justifyContent: 'center',
    marginLeft: 15,
    elevation: 20,
    shadowColor: '#52006A',
  },
  boxContentInput: {
    padding: 30,
    height: 400,
  },
  boxLogo: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  boxRadio: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  boxInput: {
    borderBottomColor: '#c1c1c1',
    borderBottomWidth: 3,
    marginBottom: 25,
  },
  input: {padding: 10},
  buttonLogin: {
    backgroundColor: COLOR.primary,
    padding: 20,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
  },
  forgetPass: {
    color: COLOR.primary,
    textAlign: 'right',
    paddingTop: 20,
    fontSize: 16,
  },
  boxSignUp: {
    textAlign: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: -310,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  buttonSign: {
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  text: {
    marginRight: 20,
    fontSize: 14,
    color: COLOR.black,
  },
});

export default RegisterScreen;
