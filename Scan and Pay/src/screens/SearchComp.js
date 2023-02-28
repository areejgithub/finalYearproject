import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const SearchComp = () => {
  return (
    <View styl={styles.container}>
      <TextInput
        // style={styles.inputstyle}
        style={{
          backgroundColor: "rgb(60,179,113)",
          height: 50,
          width: 280,
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
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
