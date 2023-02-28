import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import db from "../firebase";
import { firestore } from "firebase";
import "firebase/storage";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase/app";
import "firebase/auth";
import uuid from "react-native-uuid";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

const ShoppingCart = ({ route, navigation }) => {
  let unique = uuid.v4();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [list, setlist] = useState([]);
  let totalprice = 0;
  let total = 0;
  // const [count, setcount] = useState(1);

  const {
    barcode,
    productImg,
    productName,
    price,
    quantity,
    nm,
    count,
    setcount,
  } = route.params;
  // const message = navigation.getParam("message");
  console.log("kkaaaaaaaaa" + nm);
  const auth = firebase.auth;
  const id = auth().currentUser.uid;

  ////////////////////////
  // console.log("hello" + documentSnapShot.data());

  useEffect(() => {
    const subscriber = firestore()
      .collection("CART")
      .doc(id)
      .collection("SCART")
      .where("id", "==", id)
      .onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((documentSnapshot) => {
          list.push({
            ...documentSnapshot.data(),

            // quantity: documentSnapshot.quantity,
          });
        });

        setlist(list);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }

  const Back = () => {
    navigation.navigate("camera");
  };
  const cancel = () => {
    Alert.alert(
      "Hello",

      "Do you want to delete your cart?",
      [
        { text: "Yes", onPress: () => deletCart() },
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: true }
      //on clicking out side, Alert will not dismiss
    );
  };
  const deletCart = () => {
    var del = db.collection("CART").doc(id).collection("SCART");
    del.get().then((querySnapshot) => {
      Promise.all(
        querySnapshot.docs.map((d) => {
          d.ref.delete();
          console.log("document deleted");
        })
      );
    });
  };
  const nextCart = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var st = day + "-" + month + "-" + year;

    db.collection("CART")
      .doc(id)
      .collection("SCART")
      .where("id", "==", id)
      .get()
      .then((doc) => {
        doc.forEach((documentSnapshot) => {
          let Pname = documentSnapshot.data().productName;
          let Value = documentSnapshot.data().price;
          let Quant = documentSnapshot.data().count;
          let numb = documentSnapshot.data().nm;
          db.collection("SLIP").doc(id).collection("RECORD").doc(numb).set({
            Pname,
            Quant,
            Value,
            unique,
            total,
          });
          console.log("nsm is" + unique);
        });
      });
  };

  const payment = () => {
    navigation.navigate("payment", {
      total,
      unique,
    });
  };

  const deleteData = (nm) => {
    console.log("this is documnet id:", nm);
    db.collection("CART")
      .doc(id)
      .collection("SCART")
      .doc(nm)
      // .get()
      // .then((documentSnapshot) => {
      //   if (documentSnapshot.exists) {
      //     console.log(documentSnapshot.data());
      //   }
      // });
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })

      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    // console.log(documentSnapshot.data.id);
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
          {/* <Text style={styles.textSign}>Add to Cart</Text> */}
          <MaterialIcons name="navigate-before" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping cart</Text>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => {
            cancel();
          }}
        >
          {/* <Text style={styles.textSign}>Add to Cart</Text> */}
          <MaterialIcons name="cancel" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.barcode.toString()}
        data={list}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.cartCard}>
              <Image
                style={styles.imgstyle}
                source={{ uri: item.productImg }}
              />
              <View style={styles.v1}>
                <Text style={styles.name}>{item.productName}</Text>
                <Text style={styles.price}>RS:{item.price * item.count}</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.quantitytext}>{item.count}</Text>

                <View style={styles.actionBtn}>
                  <TouchableOpacity
                    onPress={() => {
                      const increment = firestore.FieldValue.increment(1);
                      ///doc referece
                      const story = db.collection("CBS Store").doc(item.nm);
                      console.log(nm);
                      story.update({ Quantity: increment });

                      const decrement = firestore.FieldValue.increment(-1);
                      ///doc referece
                      const storyRef = db
                        .collection("CART")
                        .doc(id)
                        .collection("SCART")
                        .doc(item.nm);

                      storyRef.update({ count: decrement });
                    }}
                  >
                    <Icon name="remove" size={25} color={"maroon"} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      const increment = firestore.FieldValue.increment(1);
                      ///doc referece
                      const storyRef = db
                        .collection("CART")
                        .doc(id)
                        .collection("SCART")
                        .doc(item.nm);
                      //console.log("your barcode is"+nm);
                      storyRef.update({ count: increment });

                      //countIncrease();
                    }}
                  >
                    <Icon name="add" size={25} color={"maroon"} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => deleteData(item.nm)}>
                  <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.total}>
        <Text style={styles.totaltext}>
          {list.forEach((item) => {
            totalprice = item.price * item.count;
            total += totalprice;
            console.log("total bill is" + total);
          })}{" "}
          Total Price:{total}
        </Text>
        <Text style={styles.totalprice}></Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.button1Style}
          onPress={() => {
            deletCart();
            payment();
            nextCart();
          }}
        >
          <Text style={styles.button1Text}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCart;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245,245,220)",
    //fontFamily:"JosefinSans_700Bold" ,
  },
  header: {
    //flex: 1,
    flexDirection: "row",
    backgroundColor: "rgb(60,179,113)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  back: {
    alignContent: "space-between",
    marginLeft: 0,
    marginTop: 10,
    //marginRight:300
  },
  cancel: {
    marginLeft: 70,
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 10,
  },
  cartCard: {
    marginTop: 20,
    height: 100,
    width: "100%",
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    // marginLeft: 100,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  imgstyle: {
    height: 80,
    width: 80,
    aspectRatio: 1,
  },
  v1: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
  },
  quantity: {
    marginRight: 20,
    alignItems: "center",
  },
  quantitytext: {
    fontWeight: "bold",
    fontSize: 18,
  },
  total: {
    marginBottom: 60,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  totaltext: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalprice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignContent: "center",
    alignItems: "center",
  },
  button1Style: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "	rgb(60,179,113)",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: "	rgb(60,179,113)",
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 80,
    height: 45,
    width: 200,
    textAlign: "center",
  },
  button1Text: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
    margin: 3,
    //fontFamily: 'sans-serif'
  },
});
