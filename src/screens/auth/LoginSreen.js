import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const RadioButtonGroup = ({radio_props}) => {
  const [selected, setSelector] = React.useState(0);
  return (
    <RadioForm formHorizontal={true} animation={true}>
      {/* To create radio buttons, loop through your array of options */}
      {radio_props.map((obj, i) => (
        <RadioButton labelHorizontal={true} key={i} style={{marginRight: 15}}>
          {/*  You can set RadioButtonLabel before RadioButtonInput */}
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={selected === obj.value}
            buttonOuterColor={selected === obj.value ? '#2196f3' : '#000'}
            borderWidth={1}
            buttonInnerColor={'#e74c3c'}
            buttonSize={20}
            buttonOuterSize={20}
            buttonStyle={{}}
            buttonWrapStyle={{marginLeft: 5}}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            labelStyle={{fontSize: 20, color: 'black'}}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

const LoginScreen = () => {
  const options = [
    {label: 'Cá nhân', value: 0},
    {label: 'Garana', value: 1},
  ];
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.blockBackground} />
      <View style={styles.boxContent}>
        <View style={styles.boxLogo}>
          <Image
            source={{
              uri: 'https://farm5.staticflickr.com/4230/35108607076_fc9c72a7f4_o.png',
            }}
            style={styles.logo}
          />
        </View>

        <View style={styles.boxContentInput}>
          <View style={styles.boxRadio}>
            <RadioButtonGroup radio_props={options} />
          </View>
          <View>
            <SafeAreaView>
              <View style={styles.boxInput}>
                <Text>Số điện thoại</Text>
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
                  onChangeText={onChangeNumber}
                  value={text}
                />
              </View>
            </SafeAreaView>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.textButton}>Đăng nhâp</Text>
            </TouchableOpacity>

            <Text style={styles.forgetPass}>Quên mật khẩu?</Text>
          </View>
        </View>
      </View>

      {/* View sign up */}
      <View style={styles.boxSignUp}>
        <View>
          <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
        </View>
        <TouchableOpacity style={styles.buttonSign}>
          <Text style={styles.textButton}>Đăng nhâp</Text>
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
    backgroundColor: '#d9463e',
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
    backgroundColor: '#d9463e',
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
    color: '#d9463e',
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
    backgroundColor: '#d9463e',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  text: {
    marginRight: 20,
    fontSize: 16,
  },
});

export default LoginScreen;
