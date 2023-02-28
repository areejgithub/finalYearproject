import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanScreen from "./ScanScreen";
import AccountScreen from "./AccountScreen";
import DrawerNavigator from "./DrawerNavigator";
import Camera from "./Camera";

const BottomButton = () => {
  const Tab = createBottomTabNavigator();

  //   const scanClick = () => {
  //     navigation.navigate("Camera");
  //   };
  //   const homeClick = () => {
  //     navigation.navigate("Scan");
  //   };
  //   const accountClick = () => {
  //     navigation.navigate("account");
  //   };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "rgb(245,245,220)",
        tabBarShowLabel: false,

        // tabBarInactiveBackgroundColor: "rgb(245,245,220)",
        headerStyle: {
          backgroundColor: "rgb(60,179,113)",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Ionicons name="home-sharp" size={34} color="rgb(60,179,113)" />
            );
          },
          headerStyle: {
            backgroundColor: "rgb(60,179,113)",
          },
        }}
        name="Home"
        component={ScanScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Ionicons name="scan-circle" size={55} color="rgb(60,179,113)" />
            );
          },
        }}
        name="camera"
        component={Camera}
      />
      <Tab.Screen
        // options={{
        //   headerStyle: {
        //     backgroundColor: "rgb(60,179,113)",
        //   },
        // }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={39}
                color="rgb(60,179,113)"
              />
            );
          },
        }}
        name="Account"
        component={DrawerNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomButton;

const styles = StyleSheet.create({});
