import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import db from '../firebase';
import { firestore } from "firebase";
const ValidateForget = ({route,navigation}) => {
    const {uid}=route.params;
    console.log(uid)
    const[pass,setPass]=useState("");
    const[confirmPass,setConfirmPass]=useState("");
    const updatePass = async () => { 
        if (pass != confirmPass){
            alert("Passwords don't match")
        }else if(pass==""&&confirmPass==""){
            alert("Plz fill the fields")
        }
        else{
           db.collection("users").doc(uid).update({
            password:pass,
            pwd2:confirmPass

        })
        Alert.alert('Password Reset!','Your password has been changed successfully. You can login using the new password now!')
        navigation.navigate('Login');
        }
    }
  return (
    <View style={styles.container}>
1     <Text style={{color: "#808080",
paddingBottom: 10,fontSize:20,marginTop:60,textAlign:'center'}}>Set a new password!</Text> 
            {/* <Text style={[styles.text_footer,{fontWeight:'300',fontSize:13,marginTop:5,paddingLeft:30, paddingRight:30}]}>
                Enter a password. </Text>           */}
            <View style={styles.infoBoxWrapper}>
            <View style={styles.action}>
            <TextInput
                placeholder='Enter New Password'
                onChangeText={(text) => setPass(text)
                   }
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize='none'
                />
            </View>
            <View style={styles.action}>
            <TextInput
                placeholder='Confirm New Password'
                onChangeText={(text) =>setConfirmPass(text)
                   }                
                   secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize='none'
                />
            </View>
            <View>
            <TouchableOpacity
                onPress={()=> {updatePass()}} 
                style={styles.button1Style}>
                {/* <LinearGradient
                    colors={['#4d917d', '#4d917d']}
                    style={styles.signIn}>
                       
                </LinearGradient> */}
                <Text style={styles.textSign}>Update</Text>
            </TouchableOpacity>
            </View></View>
    </View>
  )
}

export default ValidateForget

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(245,245,220)',
      },
      infoBoxWrapper:{
        marginTop:50,
        backgroundColor:'white',
         borderRadius:20,
         height:280,
         borderColor:'rgb(60,179,113)',
         padding:15
      },
      action:{
        margin:10
      },
    
      textInput:{
        marginTop:30,
        backgroundColor:'grey',
        height:50,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 15,
        fontSize: 18,
       
      },
      button1Style: {
        alignItems: "center",
        backgroundColor: "	rgb(60,179,113)",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderColor: "	rgb(60,179,113)",
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 15,
        height: 45,
        width: 100,
        marginLeft:140
      }
})