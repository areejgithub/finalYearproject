import {View,Text,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React,{useState} from "react";
import Menu from "./Menu";
import SliderScreen from "./SliderScreen";
//import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
const OneStop = ({navigation}) => {
  const scanClick=()=>{
    navigation.navigate("added")
  }
  const[pickervalue,setpicker]=useState('')
  
  return (
    <View style={styles.container}>
    <View>
    
      <TextInput
        style={styles.inputstyle}
        placeholder="Search here..."
        placeholderTextColor="grey"
      />
      <View>
      <SliderScreen/>
      </View></View>
      <View  style={styles.buttonstyle}>
      <TouchableOpacity
      onPress={()=>{scanClick()}}>
        {/* <Text style={styles.textstyle}>Scan here </Text> */}
        {/* <MaterialIcons name="scan" size={30} /> */}
        <Ionicons name="scan-circle"
         size={82} 
         color="skyblue" />
      </TouchableOpacity>
      </View>
      
      <View style={styles.menuStyle}>
      <View style={styles.lineStyle}></View>
      <Menu/>
      <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
  );
};
export default OneStop;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    width: "100%",

    //justifyContent:'center',
  },
  inputstyle: {
    // width:'100%',
    height: 40,
    paddingLeft: 8,
    backgroundColor: "white",
    fontSize: 16,
  },
  picker:{
    width:150,
    height:40
  },
  // slider: {
  //   alignItems: "center",
  //   marginTop: 30,
  //   height: 200,
  //   //backgroundColor: "maroon",
  // },
  sliderText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  buttonstyle: {
    marginTop: 120,
    //marginBottom:50,

    alignItems: "center",
  },
  textstyle: {
    color: "maroon",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuStyle:{
    marginTop:100,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});
