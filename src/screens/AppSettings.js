import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const AppSettings = () => {

    const onChangePasswordPressed = () => {
        console.alert('Change Pass');
    };
    const onAboutUsPressed = () => {
        console.alert('About Us');
    };
    const onContactUsPressed = () => {
        console.alert('Contact Us');
    };
    const onLogOutPressed = () => {
        console.alert('LogOut');
    };

    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "orange",
                height: "20%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    //marginTop:25,
                    width: "100%"
                }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: 80,
                        }}>App Settings</Text>

                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    padding: 20,
                    marginTop: 40
                }}>
                    <CustomButton
                        text="Change Password"
                        onPress={onChangePasswordPressed}
                        bgColor='lightgray'
                        fgColor='orange'
                    />
                    <CustomButton
                        text="About Us"
                        onPress={onAboutUsPressed}
                        bgColor='lightgray'
                        fgColor='orange'
                    />
                    <CustomButton
                        text="Contact Us"
                        onPress={onContactUsPressed}
                        bgColor='lightgray'
                        fgColor='orange'
                    />
                    <CustomButton
                        text="LogOut"
                        onPress={onLogOutPressed}
                        bgColor='orange'
                        fgColor='black'
                    />
                </View>
            </View>
        </View>
    )
}

export default AppSettings