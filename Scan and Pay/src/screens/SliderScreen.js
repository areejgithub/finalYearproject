import { StyleSheet, Text, View,Image,ScrollView,Dimensions} from 'react-native'
import React from 'react';

export default class SliderScreen extends React.Component{
    render(){
        return(
            <View>
            
                <Image
                    style={{width:'100%',height:300,resizeMode:'contain'}}
                    source={{uri:'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/oreo.jpg'}}
                />
            </View>
        )
    }
}