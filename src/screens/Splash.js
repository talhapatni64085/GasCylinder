import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo_1.png'

const Splash = () => {
    const{height} = useWindowDimensions();

  return (
    <View style={{
        flex:1,
        backgroundColor:'white',
    }}>
        <View style={{alignItems:'center'}}>
        <Image source = {Logo} 
       style = {[styles.logo, 
       {height: height * 0.3}
       ]} 
       resizeMode = "contain"
       />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        marginTop: '75%',
        width : '100%' , 
        maxHeight : 600 ,
        maxWidth: 800,
        marginLeft:65,
    }
});

export default Splash