import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const WelcomeScreen = ({navigation}) => {
    const GetStarted=()=>{
        navigation.navigate("Login")
        
    }

  return (
    <View style={styles.container} >
      {/* <Image style={styles.imgstyle}
       source={require("../../assets/logo.jpg")}/> */}
       <LottieView
           style={styles.lottie}
           source={require("../../assets/lottie/lottie4.json")}
           autoPlay
           //autoSize
       />
       <View style={styles.textview}>
           <Text style={styles.textstyle}>Welcome To</Text>
           <Text style={styles.titlestyle}>CHOUDARY BASHIR SONS</Text>
       </View>
       <View style={styles.button}>
       <TouchableOpacity
       onPress={()=>{GetStarted()}}>
       <Text style={styles.buttonText}>Get Started
       <MaterialIcons
                  name='navigate-next'
                  color='maroon'
                  size={30}
                  
              />
              </Text>
              
       </TouchableOpacity>
       </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:100,
        backgroundColor:'white',
        //justifyContent: "center",
        //alignItems: "center",
    },
    imgstyle:{
        width:200,
        height:200,
    },
    textview:{
        marginTop:30,
        alignItems:'center',
    },
    textstyle:{
   color:'maroon',
   fontSize:30,
   fontWeight:'bold',
    },
    titlestyle:{
        color:'maroon',
        fontSize:15,
        alignContent:'center',
        marginTop:5,

    },
    button:{
        alignItems: 'flex-end',
        marginTop: 250,
    },
    buttonText:{
        color: 'maroon',
        fontWeight: 'bold',
        fontSize:15,
    },
    lottie:{
        width:200,
        height:250,
    }
})

export default WelcomeScreen