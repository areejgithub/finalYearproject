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

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase";
import { firestore } from "firebase";
import uuid from "react-native-uuid";
const AccountScreen = ({ navigation }) => {
  const [data, setData] = useState();

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
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("Login");
      });
  };
  console.log("data is here", data);
  console.log("user email is ", data?.email);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/account.jpg")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 400 / 2,
            borderWidth: 2,
            marginLeft: 0,
            borderColor: "rgb(60,179,113)",
          }}
        />
        <Text style={styles.ttle}>{data?.last}</Text>
        <View style={styles.row}>
          <Icon name="email" size={20} color="rgb(60,179,113)"></Icon>
          <Text
            style={{
              color: "rgb(60,179,113)",
              marginLeft: 5,
              marginTop: 3,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {data?.email}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <View style={styles.menuItem}>
            <Icon name="logout" color="rgb(60,179,113)" size={20} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245,245,220)",
  },
  content: {
    marginTop: 30,
    marginBottom: "120%",
    justifyContent: "center",
    alignItems: "center",
  },

  ttle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    color: "rgb(60,179,113)",
    marginLeft: 20,
  },
  logo: {
    marginTop: 70,
    width: 400,
    height: 230,
    marginBottom: 80,
  },
  row: {
    flexDirection: "row",
    marginTop: 50,
    marginRight: 60,
    fontSize: 18,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 5,
    flexDirection: "row",
    marginRight: 200,
  },
  menuItemText: {
    color: "rgb(60,179,113)",
    marginLeft: 8,
    fontWeight: "bold",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 26,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 250,
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
