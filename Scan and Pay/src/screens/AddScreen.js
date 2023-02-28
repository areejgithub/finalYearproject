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
import { firestore } from "firebase";
import "firebase/storage";
import Carticon from "./Carticon";
import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { multiply } from "react-native-reanimated";
// import { addToCart } from "../redux/features/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
const AddScreen = ({ route, navigation }) => {
  //   const dispatch = useDispatch();
  const addtocart = () => {
    navigation.navigate("cart");
  };
  const Back = () => {
    navigation.navigate("camera");
  };
  const Like = () => {
    navigation.navigate("cart", {
      //   productImg: url,
      productName,
      price,
      barcode,
      nm,
      count,
      setcount,
    });
  };
  const auth = firebase.auth;

  const { barcode, productImg, productName, price, quantity, nm } =
    route.params;

  const [count, setcount] = useState(1);

  const addCart = () => {
    const id = auth().currentUser.uid;
    console.log("id is" + id);
    db.collection("CART")
      .doc(id)
      .collection("SCART")
      .doc(nm)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          db.collection("CART").doc(id).collection("SCART").doc(nm).set({
            barcode,
            productName,
            price,
            productImg,
            // quantity,
            id,
            nm,
            count,
          });
        } else {
          const increment = firestore.FieldValue.increment(1);
          ///doc referece
          const storyRef = db
            .collection("CART")
            .doc(id)
            .collection("SCART")
            .doc(nm);

          console.log("its happening");

          storyRef.update({ count: increment });
        }
      });
  };
  const increase = () => {};
  const decrease = () => {
    const increment = firestore.FieldValue.increment(-1);
    ///doc referece
    const storyRef = db.collection("CBS Store").doc(nm);
    console.log(nm);
    storyRef.update({ Quantity: increment });
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
          {/* <Text style={styles.textSign}>Add to Cart</Text> */}
          <AntDesign name="back" size={28} color="rgb(60,179,113)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            Like();
          }}
        >
          {/* <Text style={styles.textSign}>Add to Cart</Text> */}
          {/* <FontAwesome5 name="heart" size={24} color="rgb(60,179,113)" />
           */}
          <View></View>
          {/* <View
            style={{
              //   position: "absolute",
              height: 30,
              width: 30,
              borderRadius: 15,
              //   backgroundColor: "black",
              marginTop: 10,
              right: 15,
              bottom: 15,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
            }}
          >
            <Text>0</Text>
            <FontAwesome name="cart-plus" size={34} color="rgb(60,179,113)" />
          </View> */}
          <Carticon />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image
          source={{ uri: productImg }}
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
          {productName}
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Price:</Text>{" "}
          {price}.0
        </Text>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              decrease();
              addCart();
              Alert.alert("Added to cart Sucessfully");
            }}
          >
            <Text style={styles.textSign}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddScreen;
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
    color: "rgb(60,179,113)",
    fontWeight: "bold",
    fontSize: 15,
  },
  back: {
    marginLeft: 10,
    marginTop: 50,
    marginRight: 300,
  },
});
