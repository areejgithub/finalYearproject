import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase/app";
import "firebase/auth";

//import CheckBox from "expo-checkbox";

const LoginScreen = ({ navigation }) => {
  //const [agree,setAgree]=useState(false);
  /* const[values,setvalues]=useState({
      email:'',
      Pwd:''})*/
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  function handleChange(text, event) {
    setvalues((prev) => {
      return {
        ...prev,
        [event]: text,
      };
    });
  }
  const { email, password } = values;
  const validation=()=>{
    if(values.email.trim()==0){
      alert("All fields are required")
    }else if(values.password.trim()==0){
      alert("Password field is required")
     
    }else if(values.email.trim()==0||values.password.trim()==0){
      alert("All  fields are required")
    }else{
      return true
    }
  }




  function login() {
   if(validation()){
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace("Scan");
      })
      .catch((error) => {
        alert("Inavlid Email or Password");
      });
    }
  }
  const forgetbtn = () => {
    navigation.navigate("forget");
  };
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView bounces={false}>
          <ImageBackground
            source={require("../../assets/login.jpg")}
            style={{ flex: 1.5, height: 400 }}
          />
          <View style={styles.container}>
            {/*<Text style={styles.mainHeader}>Let's Login</Text>
  <Text style={styles.description}>You can reach us anytime via any@email.com</Text>*/}

            <View style={styles.inputContainer}>
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
                <AntDesign
                  name="user"
                  size={24}
                  color="black"
                  style={{ padding: 10 }}
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder={"email"}
                  placeholderTextColor="rgb(192,192,192)"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(text) => handleChange(text, "email")}
                ></TextInput>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labels}> Password</Text>
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
                <AntDesign name="lock" size={24} color="black" />

                <TextInput
                  placeholder="Password"
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onChangeText={(text) => handleChange(text, "password")}
                ></TextInput>
              </View>
              <TouchableOpacity
                onPress={() => {
                  forgetbtn();
                }}
              >
                <Text style={{ paddingTop: 5, color: "red" }}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button1Style}
              onPress={() => login()}
            >
              <Text style={styles.button1Text}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.signstyle}>Don't have any account?</Text>
              <TouchableOpacity
                style={styles.button2style}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.button2Text}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    textAlign: "center",
    fontSize: 30,
    flex: 1,
  },
  container: {
    flex: 1.5,
    height: 400,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#FAF9F6",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  placeholder: {
    width: "90%",
    height: 42,
    borderColor: "#009688",
    borderWidth: 1,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  mainHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  description: {
    color: "#808080",
    textAlign: "center",
    paddingBottom: 20,
  },
  inputContainer: {},
  labels: {
    fontSize: 17,
    fontWeight: "bold",
    //fontFamily: 'sans-serif',
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 0,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 15,
    fontSize: 18,
    flex: 1,
  },
  button1Style: {
    alignItems: "center",
    backgroundColor: "	rgb(60,179,113)",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: "	rgb(60,179,113)",
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 25,
    height: 45,
    width: 300,
    textAlign: "center",
  },
  button1Text: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
    margin: 3,
    //fontFamily: 'sans-serif'
  },
  signstyle: {
    marginTop: 10,
    marginLeft: 80,
  },
  button2style: {
    marginTop: 10,
    marginLeft: 7,
  },
  button2Text: {
    color: "rgb(60,179,113)",
    fontWeight: "bold",
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default LoginScreen;
