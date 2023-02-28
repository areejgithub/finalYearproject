import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const QrcodeScreen = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.imgstyle} 
    source={require("../../assets/qrcode.png")}

    />
      <Text style={styles.txtstyle}>Scan it and pay</Text>
      <View style={styles.donebtn}>
     <TouchableOpacity >
     <Ionicons
         name='checkmark-done-circle'
         size={50}
         color={'green'}
     />
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default QrcodeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
        // marginTop:40
    },
    imgstyle:{
        height:200,
        width:200,
    },
    txtstyle:{
        marginTop:10,
        color:'maroon',
        fontSize:16,
        fontWeight:'bold'
    },
    donebtn:{
        marginTop:10,
        paddingLeft:200,
    }

})