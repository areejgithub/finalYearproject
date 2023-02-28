import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CardField } from "@stripe/stripe-react-native";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase";
import { firestore } from "firebase";
import uuid from "react-native-uuid";
const JazcashScreen = ({ navigation, route }) => {
  const auth = firebase.auth;
  const id = auth().currentUser.uid;
  console.log("my user id ", id);
  const { unique, total } = route.params;
  console.log("unique order id is ", unique);
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  let newData;
  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        newData = doc.data();

        setData(newData);
      });
  }, []);
  console.log("data is here", data);
  console.log("username  is ", data?.last);

  const Back = () => {
    navigation.replace("Scan");
  };
  const nextPay = () => {
    navigation.replace("jazQr");
  };
  const Pay = () => {
    if (!cardDetails?.complete) {
      Alert.alert("Please enter Complete card details");
      return;
    } else {
      db.collection("Stripe")
        .add({
          // userEmail: email,
          CardDetail: cardDetails,
          userId: id,
          OrderId: unique,
          Payment: total,
          Customername: data?.last,
        })
        .then((docRef) => {
          console.log("paid data : ", docRef.id);
          Alert.alert("Your Payment is done Sucessfully");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      console.log("card detail", cardDetails);
      // setEmail("");
      setCardDetails("");
      navigation.navigate("QR-Code", {
        unique,
        total,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            Back();
          }}
        >
          <MaterialIcons name="navigate-before" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.text1}>Make Payment</Text>
      </View>
      <Text style={styles.mainHeader}>Payment through Stripe</Text>
      <View style={{ marginLeft: 170, marginBottom: 0 }}>
        <MaterialCommunityIcons name="barcode-scan" size={34} color="black" />
      </View>
      <Text style={styles.description}>
        You can reach us anytime via ScanAndPay@gmail.com
      </Text>
      {/* <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => setEmail(value)}
        style={styles.input}
      /> */}
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card2}
        style={styles.cardContainer}
        value={cardDetails}
        onCardChange={(value) => {
          setCardDetails(value);
        }}
      />
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          marginLeft: 250,
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          Payment:
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          {total}
        </Text>
      </View>

      {/* <Button
        // onPress={handlePayPress}
        title="Pay"
      /> */}
      {/* <Image
        style={styles.qrstyle}
        source={require("../../assets/jazcash.png")}
      /> */}
      <TouchableOpacity
        style={styles.pay}
        onPress={() => {
          Pay();
          // nextPay();
        }}
      >
        <FontAwesome5 name="amazon-pay" size={44} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default JazcashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    //backgroundColor:'white',
    backgroundColor: "rgb(245,245,220)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  header: {
    flex: 0.18,
    flexDirection: "row",
    //marginTop:70,
    backgroundColor: "rgb(60,179,113)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 0,
  },
  text1: {
    marginTop: 50,
    marginLeft: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    //color:'rgb(60,179,113)'
  },
  textstyle: {
    marginTop: 70,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",

    //color:'rgb(60,179,113)'
  },
  qrstyle: {
    marginTop: 20,
    height: 550,
    width: 350,
    marginHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  pay: {
    marginTop: 0,
    marginLeft: 310,
    marginBottom: 0,
  },
  back: {
    alignContent: "space-between",
    marginLeft: 0,
    marginTop: 40,
    //marginRight:300
  },
  card: {
    //marginTop:30
  },
  input: {
    marginTop: 90,
    backgroundColor: "grey",
    borderRadius: 8,
    fontSize: 20,
    height: 55,
    padding: 14,
    color: "white",
  },
  card2: {
    backgroundColor: "grey",
  },
  cardContainer: {
    height: 65,
    marginVertical: 30,
    color: "white",
    // width: 350,
    margin: 10,
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    marginTop: 40,
    paddingBottom: 15,
    textTransform: "capitalize",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 50,
    lineHeight: 25,
    marginLeft: 60,
  },
});
