import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
//import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import Menu from "./Menu";
import Cards from "./Cards";
import Card2 from "./Card2";
import SliderScreen from "./SliderScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import db from "../firebase";
import { firestore } from "firebase";
import "firebase/storage";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import BottomButton from "./BottomButton.";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./AccountScreen";
const ScanScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  // const message = navigation.getParam("message");
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [search, setSearch] = useState("");
  const [shouldShow, setshouldShow] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection("CBS Store")
      .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = users.filter(function (data) {
        const itemData = data.ProductName
          ? data.ProductName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(users);
      setSearch(text);
    }
    if (text == "") {
      setshouldShow(!shouldShow);
    }
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.4,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  // const[pickervalue,setpicker]=useState('')
  const scanClick = () => {
    navigation.navigate("Camera");
  };
  const homeClick = () => {
    navigation.navigate("Scan");
  };
  const accountClick = () => {
    navigation.navigate("account");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/scan.jpg")}
        style={{
          height: 150,
          width: 150,
          borderRadius: 400 / 2,
          borderWidth: 2,
          marginTop: 10,
          marginLeft: 0,
          borderColor: "rgb(60,179,113)",
        }}
      />

      {/* <Text style={styles.textstyle}>What Can We Help You Find ?</Text> */}
      <View
        style={{
          flexDirection: "row",
         

          backgroundColor: "	rgb(245,245,220)",
          marginTop: 20,
        }}
      >
        <AntDesign
          name="search1"
          size={28}
          color="rgb(60,179,113)"
          style={{ padding: 10 }}
        />

        <View style={styles.container2}>
          <TextInput
            // style={styles.inputstyle}
            style={{
              backgroundColor: "rgb(60,179,113)",
              height: 50,
              width: 300,
              color: "black",
              fontSize: 20,
              padding: 10,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
            placeholder="Search here..."
            placeholderTextColor="rgb(245,245,220)"
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
          />
          {shouldShow ? (
            <FlatList
              style={{
                height: 200,
                width: 300,
                display: "flex",
              }}
              // ListHeaderComponent={renderHeader}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={filteredDataSource}
              ItemSeparatorComponent={ItemSeparatorView}
              // keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={{
                    height: 50,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("SearchDetail", {
                        // uri,
                        ProductName: item.ProductName,
                        Price: item.Price,
                        ID: item.ID,
                       ProductImage:item.ProductImage,
                      })
                    }
                  >
                    <View style={styles.innerContainer}>
                      <Text style={styles.itemText}>{item.ProductName}</Text>
                      {/* <Text style={styles.itemHeading}>{item.Price}</Text> */}
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          ) : null}
        </View>
      </View>

      <View style={styles.buttonstyle}>
        {/* <TouchableOpacity
          style={{
            width: 110,
            height: 40,
            borderRadius: 20,
            position: "absolute",
            top: 250,
            left: 30,
          }}
          onPress={() => {
            homeClick();
          }}
        >
          <Ionicons name="home-sharp" size={34} color="rgb(60,179,113)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            position: "absolute",
            top: 220,
            left: 140,
          }}
          onPress={() => {
            scanClick();
          }}
        >
          <Ionicons name="scan-circle" size={85} color="rgb(60,179,113)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            position: "absolute",
            top: 250,
            right: 40,
          }}
          onPress={() => {
            accountClick();
          }}
        >
          <MaterialCommunityIcons
            name="account"
            size={39}
            color="rgb(60,179,113)"
          />
        </TouchableOpacity> */}
        {/* <BottomButton /> */}
      </View>
    </View>
  );
};
export default ScanScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 40,
    paddingHorizontal: 15,
    //justifyContent:'center',
    backgroundColor: "rgb(245,245,220)",
    // borderTopLeftRadius:50,
    //  borderTopRightRadius:50,
  },
  // container2: {
  //   flex: 1,
  // },
  cardstyle: {
    marginTop: 10,
  },
  inputstyle: {
    padding: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonstyle: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // marginTop: 180,
    // position: "relative",
    // // marginBottom: 50,

    // alignItems: "center",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
  },
  textstyle: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    //color:'green',
    color: "rgb(60,179,113)",
    //fontFamily:''
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemHeading: {
    //color: "white",
    fontSize: 18,
  },
  itemText: {
    fontWeight: "300",
  },
});
