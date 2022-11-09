import { View, Text , Image, StyleSheet, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../assets/images/logo_1.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Home from './Home';
import ForgotPassword from './ForgotPassword';

const SignIn = (props) => {
    const [ modelno, setModelno] = useState('');
    // const [ deviceno, setDeviceno] = useState('');
    const [password, setPassword] = useState('');

    const{height} = useWindowDimensions();

    const onSignInPressed = (props) => {
        props.navigation.navigate(Home)
    };

    const onForgotPasswordPressed = () => {
        props.navigation.navigate(ForgotPassword)
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    };

  return (
    <View style={styles.root}>
      <Image source = {Logo} 
       style = {[styles.logo, {height: height * 0.3}]} resizeMode = "contain"/>

       <CustomInput
       placeholder="Enter Your Model Number" 
       value={modelno} 
       setvalue={setModelno}
       />
       {/* <CustomInput
       placeholder="Enter Your Device Number" 
       value={deviceno} 
       setvalue={setDeviceno}
       /> */}
       <CustomInput
       placeholder="Enter Your Password" 
       value={password} 
       setvalue={setPassword}
       />
       <Text>By Registering, you confirm that you accept our {''}
    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''}
    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy.</Text>
    </Text>
       <CustomButton 
    text="Sign In" 
    onPress = {onSignInPressed}   
    bgColor='orange'
    fgColor='black' 
    />
    <CustomButton 
    text="Forgot Password" 
    onPress = {onForgotPasswordPressed}
    //type="TERTIARY"   
    bgColor='lightgray'
    fgColor='black' 
    />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    logo:{
        marginTop: 70,
        width : '70%' , 
        maxHeight : 200 ,
        maxWidth: 300,
        marginLeft:60,
    },
    link:{
        color:'blue',
    },
});

export default SignIn