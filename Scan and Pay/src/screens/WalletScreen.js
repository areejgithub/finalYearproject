import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {MaterialIcons} from '@expo/vector-icons';

const WalletScreen = ({navigation}) => {
    const Back=()=>{
navigation.navigate("payment")
    }
    const slip=()=>{
        navigation.navigate("Slip")
    }
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity
            style={styles.back} onPress={()=>{Back()}}>
            <MaterialIcons name="navigate-before" size={32} color="black" />
            </TouchableOpacity>
    <Text style={styles.text1}>Make Payment</Text>
    </View>
      <View style={styles.card}>
      <View style={styles.textstyle}>
      <Text style={styles.text}>Scan this Qr-Code and Pay..</Text>
      </View>
      <Image style={styles.qrstyle}
          source={{
              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXWBKL02kifVVchjh37J9QpFkZnN1xRgNBEJDr49Bc7Rz3rStcsw97W4UQaKu6eqyplU&usqp=CAU"
          }
          }
      />
          
      </View>
      <TouchableOpacity style={styles.pay}
      onPress={()=>{slip()}}>

      <FontAwesome5 name="amazon-pay" size={44} color="rgb(60,179,113)" />

      </TouchableOpacity>
    </View>
  )
}


export default WalletScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
       marginTop:40,
        backgroundColor:'rgb(245,245,220)',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
          borderBottomRightRadius:50

    },
    header: {
        //flex: 1,
        flexDirection:'row',
        backgroundColor: 'rgb(60,179,113)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginTop:0,
    },
    text1:{
        marginTop:0,
        marginLeft:60,
        fontSize: 20, fontWeight: 'bold',
      textAlign:'center',
      //color:'rgb(60,179,113)'
    },imgstyle:{
        width:400,
        height:230,
        marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderTopLeftRadius:50,
   borderTopRightRadius:50,
   borderBottomLeftRadius:50,
     borderBottomRightRadius:50
    },
    card:{
        //flex:1,
        marginTop:50,
       // marginBottom:30,
      height: 450,
      backgroundColor:'white',
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    textstyle:{
        marginTop:70,
        
    },
    text:{
        fontSize: 18, fontWeight: 'bold',
      textAlign:'center',
      //color:'rgb(60,179,113)'
    },
    qrstyle:{
        height:250,
        width:200,
       marginTop:50,
       marginHorizontal:70,

    },
    pay:{
        marginLeft:300,
    },
    back:{
        alignContent:'space-between',
        marginLeft:0,
        marginTop:0,
        //marginRight:300 
       },
    
})