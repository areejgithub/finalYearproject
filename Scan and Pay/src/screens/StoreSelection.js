// import { View, Text,StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native'
// //import { Picker } from '@react-native-picker/picker';
// import React,{useState} from "react";
// import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { NavigationRouteContext } from '@react-navigation/native';
// const StoreSelection=({navigation})=>{
//     const[pickervalue,setpicker]=useState('')
//     const select=()=>{if(pickervalue==="CBS"){
//        navigation.navigate('Cbs')
//     }else if(pickervalue==="Imtiaz"){
//         navigation.navigate('Imtiaz')
//     }else if(pickervalue==="ONESTOP"){
//         navigation.navigate('OneStop')
//     }else{
//         alert('please select a store first to continue')
//     }
// }
// return(
//     <View  style={styles.container}>
//     <View style={{borderRadius:10,borderWidth:3,borderColor:'rgb(60,179,113)'}}>

//     <Picker style={styles.Picker} selectedValue={pickervalue} onValueChange={(ItemValue)=>setpicker(ItemValue)} >
//     <Picker.Item label='Enter Store' enabled={false} />
//     <Picker.Item label='CBS' value="CBS"/>
//     <Picker.Item label='IMTIAZ' value="Imtiaz"/>
//     <Picker.Item label='ONESTOP' value="ONESTOP"/>
//     </Picker>
   
//     </View>
//     <TouchableOpacity style={styles.Sbtn} onPress={()=>select()}><Text style={styles.SbtnTxt}>Select</Text></TouchableOpacity>
//     </View>
// )




// }
// const styles=StyleSheet.create({
//     container:{
//     backgroundColor:'rgb(245,245,220)',
//     justifyContent:'center',
//     alignItems:'center',
//     height:800
    
    
//     },
//     Picker:{
// width:280,
// height:40,
// backgroundColor:'rgb(60,179,113)',
//     },
// Sbtn:{
//     width:180,
// height:40,
//     backgroundColor:'rgb(60,179,113)',
//   marginTop:40,
//   borderColor:'rgb(60,179,113)',
//   borderRadius:20
    
// },
// SbtnTxt:{
//     textAlign:'center',
//     fontSize:18,
//     padding:5
    
// }
    
// })
// export default StoreSelection;