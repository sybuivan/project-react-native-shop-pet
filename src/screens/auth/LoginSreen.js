import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';

import * as yup from 'yup';
import logo from '../../assets/images/logo.jpg';
import authApi from '../../clients/authApi';
import COLOR from '../../constants/Color';

const LoginScreen = ({navigation}) => {
  // const schema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .required('Please enter your email.')
  //     .email('Please enter a valid your address email'),
  //   password: yup.string().required('Please enter your password'),
  // });

  const {
    handleSubmit,
    control,
    reset,

    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const handleOnSubmit = async data => {
    Alert.alert(JSON.stringify(data));
    // try {
    //   await authApi.login(data);
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Đăng nhập thành công!',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     25,
    //     50,
    //   );
    //   reset({email: '', password: ''});
    //   navigation.navigate('RegisterScreen');
    // } catch (error) {
    //   Alert.alert(JSON.stringify(error));

    //   ToastAndroid.showWithGravityAndOffset(
    //     'Đăng nhập thất bại!',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     25,
    //     50,
    //   );
    // }
  };

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
                <Controller
                  control={control}
                  errors={errors}
                  render={({
                    field: {onChange, onBlur, value},
                    fieldState: {error, invalid},
                  }) => (
                    <>
                      <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                      />
                    </>
                  )}
                  name="email"
                  rules={{required: true}}
                />
              </View>
              <View style={styles.boxInput}>
                <Text>Nhập mật khẩu</Text>

                <Controller
                  control={control}
                  render={({
                    field: {onChange, onBlur, value},
                    fieldState: {error, invalid},
                  }) => (
                    <>
                      <TextInput
                        onBlur={onBlur}
                        style={styles.input}
                        onChangeText={value => onChange(value)}
                        value={value}
                        secureTextEntry={true}
                      />
                    </>
                  )}
                  name="password"
                  rules={{required: true}}
                />
              </View>
            </SafeAreaView>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={handleSubmit(handleOnSubmit)}>
              <Text style={styles.textButton}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* View sign up */}
      <View style={styles.boxSignUp}>
        <View>
          <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonSign}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.textButton}>Đăng ký</Text>
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
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export default LoginScreen;
