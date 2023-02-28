import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

const CartScreen = ({ navigation }) => {
  const payment = () => {
    navigation.navigate("payment");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      <View style={styles.cartCard}>
        <Image
          style={styles.imgstyle}
          source={{
            uri: "https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg",
          }}
        />
        <View style={styles.v1}>
          <Text style={styles.name}>Lays-Classic</Text>
          <Text style={styles.price}>Rs:50</Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.quantitytext}>2</Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={"maroon"} />
            <Icon name="add" size={25} color={"maroon"} />
          </View>
        </View>
      </View>
      <View style={styles.cartCard}>
        <Image
          style={styles.imgstyle}
          source={{
            uri: "https://www.sweetco.ie/image/cache/catalog/sweetco/product/cadburys/cadbury%202019/cadbury-dairy-milk-1000x1000.jpg",
          }}
        />
        <View style={styles.v1}>
          <Text style={styles.name}>Dairy-milk</Text>
          <Text style={styles.price}>Rs:50</Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.quantitytext}>1</Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={"maroon"} />
            <Icon name="add" size={25} color={"maroon"} />
          </View>
        </View>
      </View>
      <View style={styles.cartCard}>
        <Image
          style={styles.imgstyle}
          source={{
            uri: "https://cdnprod.mafretailproxy.com/sys-master-root/h23/h16/10226329681950/158193_main.jpg_480Wx480H",
          }}
        />
        <View style={styles.v1}>
          <Text style={styles.name}>Coca-cola</Text>
          <Text style={styles.price}>Rs:100</Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.quantitytext}>1</Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={"maroon"} />
            <Icon name="add" size={25} color={"maroon"} />
          </View>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.totaltext}>Total Price:</Text>
        <Text style={styles.totalprice}>200</Text>
      </View>
      <TouchableOpacity
        style={styles.checkbtn}
        onPress={() => {
          payment();
        }}
      >
        <Text style={styles.checktext}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "maroon",
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
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
  checkbtn: {
    marginHorizontal: 30,
  },
  checktext: {
    //backgroundColor:'maroon',
    alignItems: "center",
    textAlign: "center",
    color: "maroon",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
});
