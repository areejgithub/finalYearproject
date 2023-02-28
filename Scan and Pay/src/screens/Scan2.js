import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import db from "../firebase";
import { firestore } from "firebase";

import { Button } from "react-native-paper";
const Scan2 = () => {
  const [Post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [shouldShow, setshouldShow] = useState(true);
  const getdata = async () => {
    const querysnap = await db.collection("CBS Store").get();
    const alldata = querysnap.docs.map((docSnap) => docSnap.data());
    setPost(alldata);
    console.log("data is here", alldata);
  };
  //   useEffect(() => {
  //     getdata();
  //   }, []);
  const RenderCard = ({ item }) => {
    return (
      <TouchableOpacity>
        <View>
          <Text style={{ marginLeft: 10 }}>{item.ProductName}</Text>
          {/* <Text style={{marginLeft:10}}>{item.desc}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };
  const searchFilterFunction = (text) => {
    if (text) {
      getdata();
      const newData = Post.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setPost(newData);
      setSearch(text);
    } else {
      //setPost(Post);
      setSearch(text);
      setshouldShow(!shouldShow);
    }
  };
  return (
    <View
      style={{
        flexDirection: "coloum",
        BorderColor: "#C6C6C6",
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
      }}
    >
      <TextInput
        style={{ marginRight: 10, height: 30 }}
        // onKeyPress={getdata}
        onChangeText={(text) => {
          searchFilterFunction(text);
        }}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
        maxLength={20}
      ></TextInput>
      {shouldShow ? (
        <FlatList
          style={{ flex: 1 }}
          data={Post}
          //   scrollEnabled={true}
          //   showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <RenderCard item={item} />;
          }}
        />
      ) : null}
    </View>
  );
};

export default Scan2;

const styles = StyleSheet.create({});
