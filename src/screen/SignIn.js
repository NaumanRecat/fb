import React from "react";
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

import { Icon } from 'react-native-elements'
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class SignIn extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.banner}>
                <Image
                style={styles.tinyLogo}
                source={require('../assests/Sign.jpeg')}/>
                 <Text style={styles.text}> English  Urdu  Punjabi </Text>
                </View>

            <View style={styles.InputContainer}>
                <TextInput style={styles.TextInput} placeholder={'Phone number or email Address'} />
                <TextInput style={styles.TextInput2} placeholder={'Password'}/>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor: "white",
     },
     banner:{
         height:h('20%'),
         width:w('100%'),
         backgroundColor:'#ada',
         alignItems:'center',
     },
     tinyLogo:{
        height:h('20%'),
        width:w('100%'),
     },
     text:{
         fontSize: 13,
         fontWeight:'bold',
     },
     InputContainer:{
         marginTop: h('4%'),
        height:h('25%'),
        width:w('100%'),
        // backgroundColor:'#ada',
     },
     TextInput:{
        height: 40,
        margin: 17,
        padding: 10,
        borderBottomWidth:0.4,
     },
     TextInput2:{
        height: 40,
        margin: 17,
        padding: 10,
        borderBottomWidth:0.7,
     }
})