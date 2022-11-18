import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import React, {useEffect, useRef,useState} from 'react';
import {isValidEmail, isValidPassword} from '../../utilies/validation';

export default function Login({props, navigation}) {
  const {replace,push, navigate}=navigation 
  const refInput = useRef();
  useEffect(() => {
    refInput.current.focus();
  }, []);

   //state
   const [errorEmail, setErrorEmail] = useState('');
   const [errorPassword, setErrorPassWord] = useState('');
   //state email/pass
   const [email, setEmail] = useState('');
   const [password, setPassWord] = useState('');
 
   const [keyboardIsShow, setKeyboardIsShow] = useState(false);
   useEffect(() => {
     Keyboard.addListener('keyboardDidShow', () => {
       setKeyboardIsShow(true);
     });
     Keyboard.addListener('keyboardDidHide', () => {
       setKeyboardIsShow(false);
     });
   });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        // flexDirection:'row',
        backgroundColor: 'white',
      }}>
    <ImageBackground style={styles.Views} source={require('../../asets/images.jpg')}>
       
      <Text style={styles.TextLogin}>Đăng Nhập</Text>
      <View style={styles.ViewTK}>
        <Text style={styles.TextTK}>Tài Khoản</Text>
        <TextInput
          placeholder="Nhập tài khoản"
          placeholderTextColor="#CCCCCC"
          style={styles.InputtTK}
          ref={refInput}
          onChangeText={text => {
            // cập nhật thay đổi thông tin
            // if(isValidEmail(text)==false){
            //     setErrorEmail('Email not in corect format')

            // }else setErrorEmail(''):
            setErrorEmail(
              isValidEmail(text) == true ? '' : 'Email not in corect format',
            );
            setEmail(text);
          }}
          value={email}
        />
      </View>
      <View style={styles.ViewMK}>
        <Text style={styles.TextMK}>Mật Khẩu</Text>
        <TextInput
          placeholder="Nhập mật khẩu"
          style={styles.InputtMK}
          secureTextEntry={true}
          maxLength={10}
          placeholderTextColor="#CCCCCC"
          onChangeText={text => {
            // cập nhật thay đổi thông tin
            setErrorPassWord(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 3 char',
            );
            setPassWord(text);
          }}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.TouchDN} onPress={()=>replace('UITab')}>
        <Text style={styles.TextDN}>Đăng Nhập</Text>
      </TouchableOpacity>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Views: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',

  },
  ViewTK: { 

  },
  TextTK: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    color:'white'
  },
  InputtTK: {
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    width: 200,
    paddingLeft: 10,
    borderColor:'white'
  },

  ViewMK: {
    margin: 10,
  },
  TextMK: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    color:'white'
  },
  InputtMK: {
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    width: 200,
    paddingLeft: 10,
    borderColor:'white'
  },
  TouchDN: {
    height: 40,
    width: 200,
    backgroundColor: '#FF9933',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  TextDN: {
    fontSize: 18,
    color: 'white',
  },
  TextLogin: {
    color: 'red',
    fontSize: 25,
    paddingBottom: 20,
  },
});
