import React from 'react';
import { View, Text} from 'react-native';
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import Weight from 'react-native-vector-icons/FontAwesome5'
import Battery from 'react-native-vector-icons/Entypo'
import Cylinder from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectList from 'react-native-dropdown-select-list'
import { Dimensions } from "react-native";

const Home = () => {
  
  const [selected, setSelected] = React.useState("");
  
  const data = [{key:'1',value:'RMX-00001'},
  {key:'2',value:'RMX-00002'},
  {key:'3',value:'RMX-00003'},
  {key:'4',value:'RMX-00004'},
  {key:'5',value:'RMX-00005'}];

  const { width, height } = Dimensions.get("window");
  return (
    <View style={{
      height: height,
        width: width,
    }}>
    <View style={{
      backgroundColor: "#FFF",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "orange",
        height: "45%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
      }}>
        <View style={{ width: "100%", alignItems: 'flex-start', marginTop: '20%' }}>
          <Icons
            name='face-man-profile' size={30} color='white'
          />
        </View>
        <View style={{ width: "100%", alignItems: 'flex-end', marginTop: -28 }}>
          <Icon
            name='notifications' size={30} color='white'
          />
        </View>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          marginTop: '20%',
          width: "100%",
        }}>
          <View style={{ width: "100%" }}>
            <Text style={{
              fontSize: 28,
              color: "#FFF",
              fontWeight: "bold",
              //marginTop: 80,
            }}>Hi Muhammad Humayun Khalid</Text>

          </View>
        </View>

        <View style={{ marginTop: '10%' }}>
        <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
        </View>

        <View style={{
          alignItems:'center',
          marginTop:'10%',
        }}>
        <View style={{
          height: 130,
          flexDirection: "row",
          marginTop: 50,
          marginLeft: -3,
          marginRight: 0,
          marginTop:40
        }}>
          <View style={{
            width: 150,
            height: 135,
            backgroundColor: "#E6E6E6"
          }}>
            <Weight style={{marginTop:50,
              marginLeft:10}}
            name='weight' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
            marginLeft:70,
            marginTop:-40
          }}>
            5 KG
          </Text>
          </View>
          <View style={{
            width: 150,
            height: 135,
            backgroundColor: "#E6E6E6",
            marginLeft: 24
          }}>
            <Battery style={{marginTop:50,
              marginLeft:10}}
            name='battery' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
            marginLeft:70,
            marginTop:-40
          }}>
            80%
          </Text>
          </View>
        </View>
        <View style={{
          width: 325,
          height: 120,
          backgroundColor: "#E6E6E6",
          marginTop: 34,
          marginLeft: -3
        }}>
          <Cylinder style={{marginTop:30,
              marginLeft:10}}
            name='gas-cylinder' size={60} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
            marginLeft:70,
            marginTop:-45
          }}>
            Excellent Status
          </Text>
        </View>
      </View>
    </View>
    </View>
    </View>

  );
}

export default Home