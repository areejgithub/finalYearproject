import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const OnlinepaymentScreen = ({navigation}) => {
    const qrcode=()=>{
        navigation.navigate("Qr-code")

    }
  return (
    <View style={styles.container}>
    {/* <Image style={styles.imgstyle}
     source={require("../../assets/jazcash.png")}
    /> */}
    <TouchableOpacity style={styles.donebtn}
     onPress={()=>{qrcode()}}>
    <Ionicons
         name='checkmark-done-circle'
         size={50}
         color={'green'}
     />

    </TouchableOpacity>
    </View>
  )
}

export default OnlinepaymentScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgstyle:{
        height:'90%',
        width:'100%',
    },
    donebtn:{
        alignItems:'flex-end'
    }
})