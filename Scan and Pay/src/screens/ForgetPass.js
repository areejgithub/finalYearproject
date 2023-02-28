import { StyleSheet, Text, View,TextInput,TouchableOpacity,LinearGradient, Alert } from "react-native";
import React,{useState} from "react";
import db from "../firebase";
import { firestore } from "firebase";

const ForgetPass = ({navigation,route}) => {
  const [mail,setMail]=useState("");
  const [code,setCode]=useState("");
  const[user,setUser]=useState([]);
  const getMail = async () => {
    if(mail==""&&code==""){
      Alert.alert('Plz enter the verification detail corectly')
    }else{
    db.collection("users")
    .where('email','==',mail).get()
        .then(doc => {
            doc.forEach(doc=>{
                    console.log('mail',doc.data())
                    if(doc.data()){
                        const {key,uid}=doc.data()
                        const k = key
                        const id=uid
                        if(code==k){
                            setUser(doc.data());
                            navigation.navigate('validation',{uid:id});
                            console.log(user);

                            console.log(key);
                            console.log(uid)
                            
                        }else{
                            alert('The key is incorrect.')
                        }
                        
                    }

                })
            
            
        })
        .catch((error) => {
            alert(error.message);
        });
      }
    
}
// const validate=()=>{
//   navigation.navigate('validation');
// }
  return (
    <View style={styles.container}>
      <Text style={[styles.text_footer,{paddingLeft:30, paddingRight:30,color: "#808080",

paddingBottom: 10,fontSize:20,marginTop:90}]}>
                Forgot your password? No worries, You can change your password by
                 verifying your e-mail and key.</Text> 
            
            <View style={styles.infoBoxWrapper}>
            <View style={styles.action}>

             <TextInput
                placeholder='Enter Your Email'
                onChangeText={(text) => setMail(text)}
                style={styles.textInput}
                autoCapitalize='none'
                />
            </View>
            <View style={styles.action}>
            <TextInput
                placeholder='Enter your key'
                onChangeText={(text) => setCode(text) }
                style={styles.textInput}
                autoCapitalize='none'
                />
            </View>
            <View>
            <TouchableOpacity
                onPress={()=> {
                  getMail();
                  // validate();
                }} 
                style={styles.button1Style}>
                {/* <LinearGradient
                    colors={['#4d917d', '#4d917d']}
                    style={styles.signIn}>
                        <Text style={styles.textSign}>Verify</Text>
                </LinearGradient> */}
                <Text style={styles.textSign}>Verify</Text>
            </TouchableOpacity> 
            </View></View>
    </View>
  );
};

export default ForgetPass;

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
     padding:12
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
});
