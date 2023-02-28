import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ScanScreen from "./ScanScreen";
import AboutusScreen from "./AboutusScreen";
import FeedbackScreen from "./FeedbackScreen";
import AccountScreen from "./AccountScreen";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "rgb(245,245,220)" },
        drawerActiveTintColor: "rgb(60,179,113)",
        drawerLabelStyle: { fontSize: 20 },
      }}
      style={styles.drawerStyles}
    >
      <Drawer.Screen
        // name="scan"
        // component={ScanScreen}
        name="account"
        component={AccountScreen}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "rgb(60,179,113)",
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutusScreen}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "rgb(60,179,113)",
          },
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          backgroundColor: "rgb(60,179,113)",
          // headerShown: false,
          headerStyle: {
            backgroundColor: "rgb(60,179,113)",
          },
        }}
      />
      {/* <DrawerContentScrollView>
        <DrawerItemList />
        <DrawerItem label="Logout" />
      </DrawerContentScrollView> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerStyles: {
    backgroundColor: "rgb(60,179,113)",
    flex: 1,
  },
});
