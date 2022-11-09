import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../src/screens/SignIn';
import ForgotPassword from '../src/screens/ForgotPassword';
import Home from '../src/screens/Home';
import AppSettings from '../src/screens/AppSettings';
import Profile from '../src/screens/Profile';

const Stack = createNativeStackNavigator();
const homestack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="AppSettings" component={AppSettings}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default homestack