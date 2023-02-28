import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import "firebase/storage";
import db from "./src/firebase";
import "react-native-gesture-handler";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ScanScreen from "./src/screens/ScanScreen";
import Signup from "./src/screens/Signup";
import CartScreen from "./src/screens/CartScreen";
import AddScreen from "./src/screens/AddScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import HandpaymentScreen from "./src/screens/HandpaymentScreen";
import OnlinepaymentScreen from "./src/screens/OnlinepaymentScreen";
import QrcodeScreen from "./src/screens/QrcodeScreen";
import Onboarding from "./src/screens/Onboarding";
import AboutusScreen from "./src/screens/AboutusScreen";
import ContactScreen from "./src/screens/ContactScreen";
import FeedbackScreen from "./src/screens/FeedbackScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import WalletScreen from "./src/screens/WalletScreen";
import JazcashScreen from "./src/screens/JazcashScreen";
import SlipScreen from "./src/screens/SlipScreen";
import JazzQr from "./src/screens/JazzQr";
import Camera from "./src/screens/Camera";
import Price from "./src/screens/Price";
import SearchDetails from "./src/screens/SearchDetails";
//import SliderScreen from './src/screens/SliderScreen';
import { NavigationContainer } from "@react-navigation/native";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./src/screens/DrawerNavigator";
import firebase from "firebase/app";
import "firebase/auth";
import { LogBox } from "react-native";
import AccountScreen from "./src/screens/AccountScreen";
import Scan2 from "./src/screens/Scan2";
import BottomButton from "./src/screens/BottomButton.";
import ForgetPass from "./src/screens/ForgetPass";
import ValidateForget from "./src/screens/ValidateForget";
//import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
export default function App() {
  LogBox.ignoreLogs([
    "Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground",
  ]);
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
  ]);
  LogBox.ignoreLogs([
    "Require cycles are allowed, but can result in uninitialized values."]);
  const firebaseConfig = {
    apiKey: "AIzaSyCkptAy9fcZaGNwLs1rNaxHVT4j0MRnmro",
    authDomain: "finayearproject.firebaseapp.com",
    projectId: "finayearproject",
    storageBucket: "finayearproject.appspot.com",
    messagingSenderId: "975499121370",
    appId: "1:975499121370:web:b3dc58aaac733fc88d4be3",
    measurementId: "G-3F2MSWDF35",
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
    } else {
      console.log("we are authenticated now");
    }

    // Do other things
  });
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen name='Slider' component={SliderScreen}/> */}
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Onboarding}
        />
        {/* <Stack.Screen name='Getstart' component={WelcomeScreen}/> */}
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        />

        <Stack.Screen
          name="Scan"
          component={BottomButton}
          options={{
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: "rgb(60,179,113)",
            // },
          }}
        />
        <Stack.Screen
          name="added"
          component={AddScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name='cart' component={CartScreen}/> */}
        <Stack.Screen
          name="cart"
          component={ShoppingCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name='Hand' component={HandpaymentScreen} />
  <Stack.Screen name='Online' component={OnlinepaymentScreen} />
  <Stack.Screen name='Qr-code' component={QrcodeScreen}/> */}
        <Stack.Screen name="About us" component={AboutusScreen} />
        <Stack.Screen name="Contact us" component={ContactScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen
          name="wallet"
          component={WalletScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="jazzcash"
          component={JazcashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Slip"
          component={SlipScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QR-Code"
          component={JazzQr}
          // navigationOptions={{
          //   title: "QRRR",
          //   headerLeft: null,
          //   gestureEnabled: false,
          // }}
          // options={{ headerShown: false }}
          options={{
            headerStyle: {
              backgroundColor: "rgb(60,179,113)",
              headerLeft: null,
            },
          }}
        />
        {/* <Stack.Screen
          name="camera"
          component={Camera}
          // options={{ headerShown: false }}
          options={{
            headerStyle: {
              backgroundColor: "rgb(60,179,113)",
            },
          }}
        /> */}
        {/* <Stack.Screen name="camera" component={Camera} /> */}

        <Stack.Screen
          name="Price"
          component={Price}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchDetail"
          component={SearchDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="account"
          component={DrawerNavigator}
          // options={{ headerShown: false }}
          // options={{
          //   headerStyle: {
          //     backgroundColor: "rgb(60,179,113)",
          //   },
          // }}
        />
        <Stack.Screen
          name="scan2"
          component={Scan2}
          options={{
            headerStyle: {
              backgroundColor: "rgb(60,179,113)",
            },
          }}
        />
        <Stack.Screen
          name="forget"
          component={ForgetPass}
          options={{
            headerStyle: {
              backgroundColor: "rgb(60,179,113)",
            },
          }}
        />
        <Stack.Screen
          name="validation"
          component={ValidateForget}
          options={{
            headerStyle: {
              backgroundColor: "rgb(60,179,113)",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
