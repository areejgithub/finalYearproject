import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
const AboutusScreen = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Team Scan And Pay </Text>
      {/* <Text style={styles.paraStyle}> We are full stack developers 😀 </Text> */}
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://thumbs.dreamstime.com/z/people-catching-bugs-web-page-software-application-testing-quality-assurance-qa-team-bug-fixing-concept-vector-127215083.jpg",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About us</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          This applications helps the shoppers to use their own mobile phones to
          scan the items and then pay on their device or by hand at the click of
          the button.
        </Text>
        <Text style={styles.aboutPara}>Contact-us</Text>
        <Text style={styles.aboutPara2}>ScanAndpay@gmail.com</Text>
      </View>

      <Text style={styles.mainHeader}> Follow us on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/accounts/login/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s|c|318307045135|e|facebook%27|&placement=&creative=318307045135&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9060968%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMI_I_93tDA9gIVDNtRCh3KtgDIEAAYASAAEgKLUfD_BwE"
            )
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://www.nicepng.com/png/detail/448-4482584_fb-icon-facebook-icon.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutusScreen;

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(245,245,220)",
    // borderTopLeftRadius:50,
    // borderTopRightRadius:50,
    // borderBottomLeftRadius:50,
    //   borderBottomRightRadius:50
  },

  imgStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 10,
  },
  aboutLayout: {
    backgroundColor: "rgb(60,179,113)",
    paddingHorizontal: 30,
    marginVertical: 30,
  },

  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  aboutPara2: {
    color: "#fff",
    marginLeft: 70,
    //marginTop:10
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyle: {
    width: "100%",
    height: 60,
    aspectRatio: 1,
  },
});
