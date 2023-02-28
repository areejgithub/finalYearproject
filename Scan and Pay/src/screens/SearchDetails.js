import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import db from "../firebase";
import firebase from "firebase/app";
import "firebase/storage";
const SearchDetails = ({ navigation, route }) => {
  const [setUrl, setImageUrl] = useState();
  const { ProductName, Price, ID,ProductImage } = route.params;
  // var storage = firebase.storage().ref(ID + ".jpg");
  // storage
  //   .getDownloadURL()
  //   .then((url) => {
  //     setImageUrl(url);
  //     //   console.log(url);
  //   })
  //   .catch((e) => console.log("error while downloading", e));
  const Back = () => {
    navigation.navigate("Scan");
  };
  const Like = () => {
    Alert.alert(`Thank you`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headicons}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            Back();
          }}
        >
          <AntDesign name="back" size={28} color="rgb(60,179,113)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            Like();
          }}
        >
          {/* <Text style={styles.textSign}>Add to Cart</Text> */}
          <FontAwesome5 name="heart" size={24} color="rgb(60,179,113)" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image
          source={{ uri: ProductImage }}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "normal",
            textDecorationLine: "underline",
            textDecorationColor: "rgb(60,179,113)",
          }}
        >
          Details
        </Text>
        <Text style={styles.title}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Name:</Text>
          {ProductName}
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Price:</Text>{" "}
          {Price}.0
        </Text>
      </View>
    </View>
  );
};

export default SearchDetails;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //fontFamily:"JosefinSans_700Bold" ,
  },
  headicons: {
    flexDirection: "row",
  },
  header: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    //fontFamily:JosefinSans_100Thin,
  },
  footer: {
    flex: 1,
    backgroundColor: "rgb(245,245,220)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: 400,
    height: 400,
  },

  title: {
    color: "rgb(0,0,0)",
    fontSize: 19,
    marginTop: 10,
  },
  text: {
    color: " rgb(0,0,0)",
    marginTop: 10,
    fontSize: 19,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "maroon",
    fontWeight: "bold",
    fontSize: 15,
  },
  back: {
    marginLeft: 10,
    marginTop: 50,
    marginRight: 300,
  },
});
