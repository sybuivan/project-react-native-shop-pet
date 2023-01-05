import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import logo from '../../assets/images/logo.jpg';
import authApi from '../../clients/authApi';
import COLOR from '../../constants/Color';

const RegisterScreen = ({navigation}) => {
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
    try {
      const res = await authApi.register({
        email: data.email,
        password: data.password,
        fullName: data.email,
      });
      navigation.navigate('LoginScreen');
      ToastAndroid.showWithGravityAndOffset(
        'Đăng ký tài khoản thành công',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        error.msg || 'Đăng ký tài khoản không thành công',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
    }
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
              <View style={styles.boxInput}>
                <Text>Nhập lại mật khẩu</Text>
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
                  name="re-password"
                  rules={{required: true}}
                />
              </View>
            </SafeAreaView>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={handleSubmit(handleOnSubmit)}>
              <Text style={styles.textButton}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

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
