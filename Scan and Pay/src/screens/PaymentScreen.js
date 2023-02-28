import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const PaymentScreen = ({ navigation, route }) => {
  const { total, unique } = route.params;
  console.log("order id is ", unique);

  const wallet = () => {
    navigation.navigate("QR-Code", {
      unique,
      total,
    });
  };
  const jazcash = () => {
    navigation.navigate("jazzcash", {
      unique,
      total,
    });
  };
  const Back = () => {
    navigation.navigate("Scan");
  };
  const cancel = () => {
    Alert.alert(`Finished`);
  };
  const payment = () => {
    navigation.navigate("cart");
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
        <Text style={styles.title}>Payment</Text>
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
      <View style={styles.maincard}>
        <View style={styles.cartCard}>
          <Image
            style={styles.imgstyle}
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/000/594/216/non_2x/brown-leather-wallet-with-lots-of-money-vector-illustration.jpg",
            }}
          />
          <View style={styles.v1}>
            <Text style={styles.name}>Cash Payment</Text>
            {/* <Text style={styles.price}>Rs:50</Text> */}
          </View>
          <TouchableOpacity
            onPress={() => {
              wallet();
            }}
          >
            <View style={styles.actionBtn}>
              <Icon name="navigate-next" size={25} color={"red"} />
              {/* <Icon name="add" size={25} 
           color={'maroon'} /> */}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cartCard}>
          <Image
            style={styles.imgstyle}
            source={{
              uri: "https://c8.alamy.com/comp/JGAC9E/illustration-concepts-of-online-payment-methods-icons-for-online-payment-JGAC9E.jpg",
            }}
          />
          <View style={styles.v1}>
            <Text style={styles.name}>Online Payment</Text>
            {/* <Text style={styles.price}>Rs:50</Text> */}
          </View>
          <TouchableOpacity
            onPress={() => {
              jazcash();
            }}
          >
            <View style={styles.actionBtn}>
              <Icon name="navigate-next" size={25} color={"red"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.totalcard}>
        <View style={styles.total}>
          <Text style={styles.totaltext}>Sub-Total:</Text>
          <Text style={styles.totalprice}>{total}</Text>
        </View>
        <View style={styles.button}>
          {/* <TouchableOpacity
            style={styles.button1Style}
            onPress={() => {
              payment();
            }}
          >
            <Text style={styles.button1Text}>View Details</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245,245,220)",
    // marginTop: 40,
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
    marginTop: 0,
  },
  back: {
    alignContent: "space-between",
    marginLeft: 0,
    marginTop: 10,
    //marginRight:300
  },
  cancel: {
    marginLeft: 110,
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 70,
    marginTop: 10,
  },
  maincard: {
    marginTop: 40,
    height: 400,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  cartCard: {
    flexDirection: "row",
    marginTop: 30,
    height: 100,
    backgroundColor: "rgb(245,245,220)",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  actionBtn: {
    marginTop: 40,
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
    marginRight: 10,
    borderTopLeftRadius: 40,
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
  totalcard: {
    flexDirection: "row",
    marginTop: 150,
    height: 100,
    backgroundColor: "white",
    paddingHorizontal: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  total: {
    //flexDirection: 'row',
    justifyContent: "center",
    marginVertical: 15,
  },
  totaltext: {
    fontSize: 18,
    fontWeight: "bold",
    //color:'rgb(60,179,113)'
  },
  totalprice: {
    fontSize: 18,
    fontWeight: "bold",
    //color:'rgb(60,179,113)'
  },
  button: {
    alignContent: "center",
    alignItems: "center",
  },
  button1Style: {
    alignContent: "center",
    alignItems: "center",
    //backgroundColor:'	rgb(60,179,113)',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: "	rgb(60,179,113)",

    marginTop: 55,
    marginLeft: 80,
    height: 45,
    width: 200,
    textAlign: "center",
  },
  button1Text: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 3,
    color: "rgb(60,179,113)",
  },
});
