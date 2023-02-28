import { StyleSheet, Text, View,Image,TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {MaterialIcons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const SlipScreen = ({navigation}) => {
    const Back=()=>{
navigation.navigate("payment")
    }
    const logout=()=>{
        navigation.navigate("Login")
    }
    const print=()=>{
        Alert.alert("Printed Sucessfully")
    }
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity
            style={styles.back} onPress={()=>{Back()}}>
            <MaterialIcons name="navigate-before" size={32} color="black" />
            </TouchableOpacity>
    <Text style={styles.text1}>Order Summary</Text>
    <TouchableOpacity
            style={styles.logout} onPress={()=>{logout()}}>
            <AntDesign name="logout" size={26} color="black" />
            </TouchableOpacity>

    </View>
      <View style={styles.card}>
      <View style={styles.slipcontent}>
       <Text style={styles.text}>CBS-Store</Text>
          <Text style={styles.order}>Order#1</Text>
          <View style={styles.slip}>
          <Text style={styles.sliptxt}>Product     </Text>
          <Text style={styles.sliptxt}>Quantity     </Text>
          <Text style={styles.sliptxt}>Amount      </Text>

          </View>
          <View style={styles.slipitem}>
          <Text style={styles.sliptxt2}>Lays-classic         </Text>
          <Text style={styles.sliptxt2}>2     </Text>
          <Text style={styles.sliptxt2}>50        </Text>
          </View>
          <View style={styles.slipitem}>
          <Text style={styles.sliptxt2}>Dairy-milk           </Text>
          <Text style={styles.sliptxt2}>1     </Text>
          <Text style={styles.sliptxt2}>50          </Text>
          </View>
          <View style={styles.slipitem}>
          <Text style={styles.sliptxt2}>Coca-Cola       </Text>
          <Text style={styles.sliptxt2}>1        </Text>
          <Text style={styles.sliptxt2}>100        </Text>
          </View>
      </View>
      <View style={styles.textstyle}>
      <View style={styles.textstyle2}>
      <View style={styles.txts}>
      <Text style={styles.text2}>Sub-Total  </Text>
      <Text style={styles.text2}>250.0</Text>
      </View>
      <View style={styles.txts2}>
      <Text style={styles.text2}>Tax  </Text>
      <Text style={styles.text2}>0.00</Text>
      </View>
      
      </View>
      </View>
      <View style={styles.linestyle}>
          {/* <Text></Text> */}
      </View>
      <View style={styles.total}>
      <Text style={styles.t1}>Total Amount :</Text>
      <Text style={styles.t2}>250.0</Text>
      </View>
      <TouchableOpacity style={styles.pay}
      onPress={()=>{print()}}>
      <FontAwesome name="print" size={34} color="rgb(60,179,113)" />
      
      </TouchableOpacity>
      </View>
      
    </View>
  )
}


export default SlipScreen

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
    },
    card:{
        //flex:1,
         marginTop:40,
       // marginBottom:30,
      height: 500,
      backgroundColor:'white',
      
      paddingHorizontal: 10,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    textstyle2:{
        flexDirection:'row'
    },
    text:{
        fontSize: 25, fontWeight: 'bold',
      textAlign:'center',
      marginTop:10,
      
      //color:'rgb(60,179,113)'
    },
    txts:{
        flexDirection:'column',
       marginLeft:70,
        marginTop:20

    },
    txts2:{
       flexDirection:'column',
        marginTop:20,
        marginLeft:80

    },
    txts3:{
        // flexDirection:'row',
         //marginTop:20,
         marginLeft:100
 
     },
    
    back:{
        alignContent:'space-between',
        marginLeft:0,
        marginTop:0,
        //marginRight:300 
       },
       logout:{
           marginLeft:70

       },
       order:{
           fontSize:18,
           fontWeight:'bold',
          //marginLeft:20

       },
       slipcontent:{
           marginLeft:50,
           marginTop:20,
           

       },
       slip:{
           marginTop:10,
           flexDirection:'row',
          marginLeft:20
       },
       slipitem:{
        marginTop:30,
        flexDirection:'row',
       marginLeft:20
    },
       sliptxt:{
           fontSize:16,
           fontWeight:'bold'
       },
       sliptxt2:{
        fontSize:16,
        //fontWeight:'bold'
    },linestyle:{
        borderRadius:2,
        borderWidth:5,
        borderColor:'black',
    },
    total:{
        flexDirection:'row',
        //marginLeft:90,
        marginTop:10,
    },
    t1:{
        marginLeft:50,
        fontSize:16,
        fontWeight:'bold'

    },
    t2:{
        marginLeft:60,
        fontSize:16,
        fontWeight:'bold'
    },
    pay:{
        marginTop:50,
        marginLeft:320,
    },

    
})