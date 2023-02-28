import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import db from "../firebase";
import firebase from "firebase/app";

import { NativeText } from "react-native/Libraries/Text/TextNativeComponent";

export const Camera = ({ navigation }) => {
  const isFocused = useIsFocused();
  //true   const [hasPermission,setHasPermissison]=useState()
  const [hasPermission, setHasPermissison] = useState(false);
  //true const [scanned,setscanned]=useState(false)
  const [scanned, setscanned] = useState();

  const [barcode, setbarcode] = useState("");

  const [value, setValue] = useState({
    list: "",
    price: "",
  });

  const [text, settext] = useState([]);
 
  useEffect(() => {
    (async () => {
      setscanned(true);
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissison(status == "granted");
    })();
  }, []);

  const getData = () => {
    db.collection("items")
      .where("id", "==", barcode)
      .get()
      .then((doc) => {
        doc.forEach((documentSnapShot) => {
          if (documentSnapShot.exists) {
            const text = [];
            const { list, price } = documentSnapShot.data();
            text.push({
              list,
              price,
            });
          } else {
            console.log("error");
          }
        });
      })
      .catch((e) => console.log("Error while downloading", e));
  };

  
  

  if (!hasPermission) {
    return (
      <View style={style.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
 

  const handleBarCodeScanned = ({ type, data }) => {
    setbarcode(data);
    console.log("length of string is" + data.toString().length);
    if (data.toString().length < 13) {
      var ifdata = "0" + data;
      console.log("dat of 13 is" + ifdata);
      db.collection("CBS Store")
        .where("ID", "==", ifdata)
        .get()
        .then((doc) => {
          doc.forEach((documentSnapShot) => {
            if (documentSnapShot.exists) {
              const text = [];
              const { ProductName, Price } = documentSnapShot.data();
              text.push({
                ProductName,
                Price,
              });
            }
            navigation.navigate("added", {
              // productImg: url,
              productImg: documentSnapShot.data().ProductImage,
              productName: documentSnapShot.data().ProductName,
              price: documentSnapShot.data().Price,
              barcode: documentSnapShot.data().ID,
              quantity: documentSnapShot.data().Quantity,
              nm: documentSnapShot.data().uid,
            });
            console.log("hello" + documentSnapShot.data());
          });
        })
        .catch((e) => alert("System does not recognize barcode"));
      //});

      console.log(`Data: ${ifdata}`);
      console.log(`Type: ${type}`);
      setscanned(true);
    } else {
      getData();
      db.collection("CBS Store")
        .where("ID", "==", data)
        .get()
        .then((doc) => {
          doc.forEach((documentSnapShot) => {
            if (documentSnapShot.exists) {
              const text = [];
              const { ProductName, Price } = documentSnapShot.data();
              text.push({
                ProductName,
                Price,
              });
            }
            navigation.navigate("added", {
              // productImg: url,
              productImg: documentSnapShot.data().ProductImage,
              productName: documentSnapShot.data().ProductName,
              price: documentSnapShot.data().Price,
              barcode: documentSnapShot.data().ID,
              quantity: documentSnapShot.data().Quantity,
              nm: documentSnapShot.data().uid,
            });
            console.log("hello" + documentSnapShot.data());
          });
        })
        .catch((e) =>console.log("aeeeeeeeeeee"));
      //});
 
      console.log(`Data: ${data}`);
      console.log(`Type: ${type}`);
      //setscanned(undefined)
      setscanned(true);
    }
  };
  const Back = () => {
    navigation.navigate("Scan");
  };
  return (
    <View style={style.container}>
      <View style={style.barcodebox}>
        {isFocused ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              height: 400,
              width: 450,
              alignContent: "center",
              alignItems: "center",
              marginBottom: 20,
              flex: 0.6,
              borderRadius: 30,
            }}
          />
        ) : null}

       {/* <Button
          title={"Tap to Scan"}
          onPress={() => setscanned(false)}
          style={{ backgroundColor: "rgb(60,179,113)" }}
          />*/}
          <TouchableOpacity onPress={()=>setscanned(false)}  style={{backgroundColor:'rgb(225, 193, 110)',padding:10, borderRadius:400/2,}}><Text style={{fontWeight:'bold'}}>Tap to Scan</Text></TouchableOpacity>
      
      </View>
      <View style={{ margin: 20 }}></View>
      <View style={{ flex: 1, marginTop: 100 }}>
       
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  // overflow:'hidden',
  //borderRadius:30,

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headicons: {
    flexDirection: "row",
  },
  back: {
    marginLeft: 10,
    marginTop: 50,
    marginRight: 300,
  },
  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 980,
    width: 900,
    // opacity:0.5,
    overflow: "hidden",

    backgroundColor: "rgb(245,245,220)",
  },
  bg: {
    opacity: 0.6,
    width: "100%",
    height: "100%",
  },

  main: {
    fontSize: 5,
    margin: 20,
  },
  text: {
    fontWeight: "bold",
    color: "black",
  },
});

export default Camera;
