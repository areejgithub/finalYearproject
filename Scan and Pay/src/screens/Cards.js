import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const Cards = () => {
  return (
     <View style={styles.container}>
    <Card style={styles.cardstyle}>
    <Card.Title title="Card Title" subtitle="Card Subtitle"  />
    <Card.Cover 
    style={styles.imgstyle}
    source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  </View>
  )
}
export default Cards

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:'column'
        
    },
    cardstyle:{
        height:200,
        width:200

    },
    imgstyle:{
        width:150,
        height:200
    }
    
})