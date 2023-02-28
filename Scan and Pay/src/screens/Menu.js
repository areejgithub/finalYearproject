import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

const Menu = () => {
    
      
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About us")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Feedback")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact us")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;