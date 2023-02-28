import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//import {connect} from 'react-redux';
const Carticon = () => {
  return (
    <View>
      <View
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
        <FontAwesome name="cart-plus" size={34} color="rgb(60,179,113)" />
      </View>
    </View>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     cartItem: state,
//   };
// };

export default Carticon;

const styles = StyleSheet.create({});
