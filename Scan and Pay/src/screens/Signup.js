import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import firebase from "firebase/app";
import "firebase/auth";
const isValid = (obj) => {
  Object.values(obj).every((text) => text.trim());
};

const Signup = ({ navigation }) => {
  const auth = firebase.auth;
  const firestore = firebase.firestore();
  const [userinfo, setuserinfo] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    key:"",
  });

  const { first, last, email, password, pwd2,key } = userinfo;
  const [error, setError] = useState("");

  function handleChange(text, event) {
    setuserinfo((prev) => {
      return {
        ...prev,
        [event]: text,
      };
    });
  }

  const validation = () => {
    // if(!isValid(userinfo)) return setError('please fill in all the fields',error);
    if (
      userinfo.last.trim() == 0 ||
      userinfo.email.trim() == 0 ||
      userinfo.password.trim() == 0 ||
      userinfo.pwd2.trim() == 0||userinfo.key.trim()==0
    )
      return setError("All fields are required", error);
      if(userinfo.key.length!=3)
      return setError("Only 3 digits are allowed for key ", error);
      
    const re = /^[A-Za-z]+$/;
    if (!re.test(userinfo.last))
      return setError("Inavlid username", error);
    if (!userinfo.last.trim() || last.length < 3)
      return setError("Inavlid username", error);
    if (!userinfo.first.trim() || first.length < 3)
    if(userinfo.password.length<8) return setError("Password should be of 8 characters")
      if (userinfo.password != userinfo.pwd2)
        return setError("Confirm password does not match password", error);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false)
      return setError("Invalid Email or Password");
    return true;
  };
  const onsubmit = () => {
    if (validation()) {
      
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firestore.collection("users").doc(auth().currentUser.uid).set({
            uid: auth().currentUser.uid,
            last,
            email,
            password,
            pwd2,
            key,
          });

          // auth.currentUser.sendEmailVerification();
          navigation.navigate("Login");
        })
        .catch((error) => {
          alert(error.message);
        });
      // auth.currentUser.sendEmailVerification();
    }
  };
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <ScrollView bounces={false}>
        <View style={styles.mainContainer}>
          <Image
            source={require("../../assets/admin.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 400 / 2,
              borderWidth: 2,
              marginTop: 50,
              marginLeft: 100,
            }}
          />
          <Text style={styles.mainHeader}>Create Account</Text>
          <Text style={styles.Description}>
            Create account if you haven't already
          </Text>
          <View
            style={{
              backgroundColor: "#FAF9F6",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              height: 800,
            }}
          >
            <View style={styles.inputcontainer}>
              {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            </View>
            <View style={styles.inputcontainer}>
              <Text style={styles.labels}>User Name</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 6,
                  borderColor: "	rgb(245,245,220)",
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: "	rgb(245,245,220)",
                }}
              >
                <AntDesign
                  name="user"
                  size={24}
                  color="black"
                  style={{ padding: 10 }}
                />

                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="User Name"
                  value={last}
                  onChangeText={(text) => handleChange(text, "last")}
                />
              </View>
            </View>
            <View style={styles.inputcontainer}>
              <Text style={styles.labels}>Email</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 6,
                  borderColor: "	rgb(245,245,220)",
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: "	rgb(245,245,220)",
                }}
              >
                <MaterialIcons
                  name="attach-email"
                  size={24}
                  color="black"
                  style={{ padding: 10 }}
                />
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder=" Type your Email"
                  onChangeText={(text) => handleChange(text, "email")}
                />
              </View>
            </View>
            <View style={styles.inputcontainer}>
              <Text style={styles.labels}>Password</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 6,
                  borderColor: "	rgb(245,245,220)",
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: "	rgb(245,245,220)",
                }}
              >
                <AntDesign
                  name="lock"
                  size={24}
                  color="black"
                  style={{ padding: 10 }}
                />
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={(text) => handleChange(text, "password")}
                />
              </View>
            </View>
            <View style={styles.inputcontainer}>
              <Text style={styles.labels}>Confirm Password</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 6,
                  borderColor: "	rgb(245,245,220)",
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: "	rgb(245,245,220)",
                }}
              >
                <AntDesign
                  name="lock"
                  size={24}
                  color="black"
                  style={{ padding: 10 }}
                />
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholder="confirm password"
                  onChangeText={(text) => handleChange(text, "pwd2")}
                />
              </View>
              <View style={styles.inputcontainer}>
              <Text style={styles.labels}>Enter 3-digit key</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 6,
                  borderColor: "	rgb(245,245,220)",
                  borderWidth: 1,
                  borderRadius: 50,
                  backgroundColor: "	rgb(245,245,220)",
                }}
              >
               <Entypo name="key" size={24} color="black"  style={{ padding: 10 }}/>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholder="enter key"
                   onChangeText={(text) => handleChange(text, "key")}
                />
              </View>
              </View>
            </View>
            <View style={styles.lastPart}>
              <TouchableOpacity
                onPress={() => onsubmit()}
                style={styles.accountButton}
              >
                <Text style={styles.AccountText}>Creat Account</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.signin}>
                Already have an Account?
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.signinText}>Signin</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 1000,
    textAlign: "center",
    fontSize: 30,
    //fontFamily:'sans-serif',
    backgroundColor: "rgb(245,245,220)",
  },
  mainHeader: {
    fontWeight: "bold",
    paddingTop: 20,
    marginLeft: 10,
    fontSize: 20,
    //fontFamily:'sans-serif',
  },
  Description: {
    color: "#808080",

    paddingBottom: 10,
  },
  inputcontainer: {
    marginTop: 10,
    padding: 10,
  },
  labels: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },
  inputStyle: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 15,
    fontSize: 18,
  },
  lastPart: {
    alignItems: "center",
    marginTop: 20,
  },
  accountButton: {
    backgroundColor: "#800000",
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: " 	rgb(60,179,113)",
    borderColor: " 	rgb(60,179,113)",
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
  },

  AccountText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
  },
  signin: {
    textAlign: "center",
    paddingLeft: 70,
    fontSize: 15,
  },
  signinText: {
    marginTop: 10,
    paddingLeft: 70,
    fontSize: 15,
    color: "rgb(60,179,113)",
    fontWeight: "bold",
  },
  labels: {
    fontSize: 17,
    fontWeight: "bold",
    //fontFamily: 'sans-serif',
    marginBottom: 10,
  },
});

export default Signup;
{
  /* */
}
