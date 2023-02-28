import { StyleSheet, Text, View,Image,ScrollView,KeyboardAvoidingView } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { ScrollView } from 'react-native-gesture-handler';


const Card2 = () => {
  return (
    <KeyboardAvoidingView enabled
    behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView  bounces={false}>
    <View style={styles.cartCard}>
    <Image style={styles.imgstyle}
        source={{
      uri:"https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"  }}
    />
    <View style={styles.v1}>
    <Text style={styles.name}>Lays-Classic</Text>
    <Text style={styles.price}>Rs:50</Text>
    </View>
    <View style={styles.actionBtn}>
      <Icon name="event-available" size={25} 
      color={'black'} 
      />
     <Text style={styles.availtext}>Available in Imtiaz</Text>
    </View>
  </View>
  <View style={styles.cartCard}>
    <Image style={styles.imgstyle}
        source={{
      uri:"https://m.media-amazon.com/images/I/51kdYZAFcLL._SY355_.jpg"  }}
    />
    <View style={styles.v1}>
    <Text style={styles.name}>Sunsilk</Text>
    <Text style={styles.price}>Rs:500</Text>
    </View>
    <View style={styles.actionBtn}>
      <Icon name="event-available" size={25} 
      color={'black'} 
      />
     <Text style={styles.availtext}>Available in CBS</Text>
    </View>
  </View>
  <View style={styles.cartCard}>
    <Image style={styles.imgstyle}
        source={{
      uri:"https://m.media-amazon.com/images/I/51kYNBPnHtL._PIbundle-3,TopRight,0,0_AA500SH20_.jpg"  }}
    />
    <View style={styles.v1}>
    <Text style={styles.name}>Butter</Text>
    <Text style={styles.price}>Rs:420</Text>
    </View>
    <View style={styles.actionBtn}>
      <Icon name="event-available" size={25} 
      color={'black'} 
      />
     <Text style={styles.availtext}>Available in OneStop</Text>
    </View>
  </View>

  </ScrollView>
  </KeyboardAvoidingView>

  )
}

export default Card2

const styles = StyleSheet.create({
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor:'white',
        marginVertical: 10,
        marginHorizontal: 0,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius:50,
     borderTopRightRadius:50,
      },
      actionBtn: {
        width: 80,
        height: 60,
        backgroundColor:'white',
        marginRight:20,
        marginTop:40,
       flexDirection: 'row',
      },
      imgstyle: {
        height: 80,
         width: 80,
        aspectRatio: 1,
      },
      v1:{
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1,
      },
      name:{
        fontWeight: 'bold',
         fontSize: 16
      },
      price:{
        fontSize: 17, 
        fontWeight: 'bold'
      },
    availtext:{
        fontWeight: 'bold',
         fontSize: 14,
         //color:	'rgb(60,179,113)',
         textAlign:'center'

      },
})