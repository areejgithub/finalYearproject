import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
//import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase";
import { firestore } from "firebase";
import uuid from "react-native-uuid";
const FeedbackScreen = () => {
  const [data, setData] = useState();
  const [feed, setFeed] = useState();
  const auth = firebase.auth;
  const id = auth().currentUser.uid;
  console.log("my user id ", id);
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
  console.log("user email is ", data?.email);
  console.log("user name is ", data?.last);

  const fedbackSubmit = () => {
    if (!feed) {
      Alert.alert("Plz fille the field");
    } else {
      db.collection("Feedback")
        .add({
          Feedback: feed,
          email: data?.email,
          Customername: data?.last,
        })
        .then((docRef) => {
          console.log("Feedback Stored with ID: ", docRef.id);
          Alert.alert("Thanks For Your Feedback");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setFeed("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          // source={require('../../assets/feed2.jpg')
          source={{
            uri: "https://en.pimg.jp/064/888/824/1/64888824.jpg",
          }}
          style={styles.logo}
          // resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>
          Please give your remarks here
          <Entypo name="emoji-happy" size={30} color="black" />
        </Text>
        {/* <View style={styles.emojis}>
               <TouchableOpacity>
               <Entypo name="emoji-happy" size={44} color="rgb(60,179,113)" />
               </TouchableOpacity>
               <TouchableOpacity>
               <Entypo name="emoji-sad" size={44} color="rgb(60,179,113)" />
               </TouchableOpacity>
               <TouchableOpacity>
               <Entypo name="emoji-neutral" size={44} color="rgb(60,179,113)" />
               </TouchableOpacity>
               <TouchableOpacity>
               <Entypo name="emoji-flirt" size={44} color="rgb(60,179,113)" />
               </TouchableOpacity>
           </View> */}
        {/* <Text style={styles.txt}>Additional Comments</Text> */}
        <TextInput
          style={styles.inputStyle}
          value={feed}
          onChangeText={(value) => setFeed(value)}
        />
        <TouchableOpacity
          onPress={() => {
            fedbackSubmit();
          }}
          style={styles.submit}
        >
          <Text style={styles.submittext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedbackScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'white',
    // marginBottom: 30,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //fontFamily:JosefinSans_100Thin,
  },
  footer: {
    flex: 2.3,
    backgroundColor: "rgb(245,245,220)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    marginTop: 70,
    width: 400,
    height: 230,
    marginBottom: 80,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },

  emojis: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    fontSize: 18,
    height: 100,
  },
  submit: {
    alignItems: "center",
    backgroundColor: "	rgb(60,179,113)",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: "	rgb(60,179,113)",
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 35,
    marginLeft: 120,
    height: 45,
    width: 100,
    textAlign: "center",
  },
  submittext: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
    margin: 3,
  },
});
