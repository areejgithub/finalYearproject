// Generation of QR Code in React Native
// https://aboutreact.com/generation-of-qr-code-in-react-native/

// import React in our code
import React, { useEffect, useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import db from "../firebase";
import { firestore } from "firebase";
import "firebase/storage";
import QRCode from "react-native-qrcode-svg";
import firebase from "firebase/app";
const JazzQr = ({ navigation, route }) => {
  const auth = firebase.auth;
  const id = auth().currentUser.uid;
  //   console.log("my user id ", id);
  const { unique, total } = route.params;
  const [oder, setorder] = useState({ unique, total });
  //   console.log("unique order id is ", unique);
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState([]);
  const [list, setlist] = useState([]);
  // useEffect(() => {
  //   getValue();
  // }, []);

  const getValue = async () => {
    firestore()
      .collection("SLIP")
      .doc(id)
      .collection("RECORD")
      .where("unique", "==", unique)

      .onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((documentSnapshot) => {
          list.push({
            ...documentSnapshot.data(),
            // quantity: documentSnapshot.quantity,
          });
          setlist(list);
          console.log(list);
          list.map((item, index) => {
            Item =
              "Itemname =" +
              "" +
              item.Pname +
              "    " +
              "Quantity :" +
              "     " +
              item.Quant +
              "     " +
              "Price :" +
              "     " +
              item.Value +
              "     ";
            // "Total"
            // " " +
            // total;
            //Quantity=item.Quant
            setQrvalue((prev) => prev + Item);
            console.log("qrrrrrrrrrrrrrrrrr" + qrvalue);
          });
        });
      });
  };
  return (
    // <ScrollView style={{ backgroundColor: "rgb(245,245,220)" }}>
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Get Your Qr-Code</Text>
        <QRCode
          //QR code value
          value={[
            "  " +
              "OrderID: " +
              `${unique}` +
              "  " +
              qrvalue +
              "  " +
              " " +
              " total:" +
              `${total}`,
          ]}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
          logo={{
            url: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
          }}
          //Center Logo size  (Optional)
          logoSize={30}
          //Center Logo margin (Optional)
          logoMargin={2}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
          {/* Please insert any value to generate QR code */}
        </Text>
        {/* <FlatList
          data={list}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            ></View>
          )}
        /> */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            // setQrvalue(list);
            getValue();

            setQrvalue("");

            // console.log("pname", list.Pname);
            // console.log("qr code value", qrvalue);
          }}
        >
          {/* <Text>hello:{item.Pname}</Text>
           */}
          {/* <Text>hello:{item.Value}</Text> */}
          <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
        </TouchableOpacity>

        {/* <TextInput
            style={styles.textInputStyle}
            onChangeText={(inputText) => setInputText(inputText)}
            placeholder="Enter Any Value"
            value={inputText}
          /> */}
      </View>
    </View>
  );
};
export default JazzQr;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: "rgb(245,245,220)",
    marginBottom: 0,
  },
  container: {
    flex: 1.5,
    backgroundColor: "rgb(245,245,220)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    marginBottom: 170,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  textStyle: {
    textAlign: "center",
  },
  textInputStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "rgb(60,179,113)",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#51D8C7",
    alignItems: "center",
    borderRadius: 5,

    padding: 10,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
