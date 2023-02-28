import { StyleSheet, Text, View,TextInput,Button,Image,FlatList,Pressable} from 'react-native'
import db from '../firebase';
import * as React from 'react';
import "firebase/storage"
import { useEffect,useState,useLayoutEffect } from 'react';



const  Price=({route,navigation})=>{
  const[setUrl,setImageUrl]=useState(productImg);
  const [isLoading,setIsLoading]=useState(false)
  const [text,settext]=useState([]);
 
 // const {productName,productPrice,productImg}=route.params;
const {productImg,productName}=route.params;


  //console.log("fuvk"+productImg)

  
/*useLayoutEffect(()=>{
 
  setTimeout(()=>setIsLoading(true),100)
    var storage=firebase.storage().ref(productName+'.png');
 
storage.getDownloadURL().then((url)=>{
  setImageUrl(url);

  console.log(url)
})
.catch((e)=> console.log("Error while downloading",e))
  },[])*/
  /*useLayoutEffect(()=>{

    db.collection("items").where('id',"==",productName)

 
 //////////////////second chunk part 2
  .get().then((doc) => {
      
        
         doc.forEach(documentSnapShot=> {
       
           if(documentSnapShot.exists){
             
           const text=[]
           const{list,price}=documentSnapShot.data();
           text.push({
             list,
             price,
          
           }) 
           settext(text)
           console.log("Document data:", documentSnapShot.data());
    
         }else{
           console.log("error")
         }
      })
         })
        },[]);*/

     
  
     
     //settext(text);
       //} else {
           // doc.data() will be undefined in this case
          // console.log("No such document!");
           //settext("no such document");
   //}
  // })//).catch((error) => {
       //console.log("Error getting document:", error);
       //settext(error)
 
  
  return (
    <View>
    <Image style={{height: 200, width: 200}} source={{uri:productImg}}/>
    <Text>{productName}</Text>
    <TextInput placeholder='please enter your name'>{productName}</TextInput>

    <Button title='shop more' onPress={()=>navigation.navigate('Camera')}/>
<Image  style={{height:400,width:400}} source={{}}/>
    {/*<Text>hello{productName}</Text>

<TextInput placeholder='please enter your name'>{productName}</TextInput>

<Text>{productName}</Text>
<Text>{productPrice}</Text>
<Image style={{height: 200, width: 200}} source={{productImg}}/>
  */}
{/*<FlatList
style={{height:'100%'}}
data={text}A
numColumns={1}
renderItem={({item})=>(

  <Pressable style={{paddingTop:5,backgroundColor:'#e5e5e5' ,borderRadius:15,margin:5,marginHorizontal:10}}><View  style={{alignItems:'center',flexDirection:'column'}}>
  <Text style={{fontWeight:'bold'}}>{item.list}</Text>
  <Text style={{fontWeight:'bold'}}>{ item.price}</Text>

 
 
 </View></Pressable>
)}
/>*/}

     </View>
   
  )
}

export default Price;

const styles = StyleSheet.create({})