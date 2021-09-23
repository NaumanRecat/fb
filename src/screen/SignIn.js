import React from "react";
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, alert} from 'react-native';
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

            <View style={styles.Login} >
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}} style={styles.ButtonLogin} >
             <Text style={styles.LoginText}> Log In</Text>
            </TouchableOpacity>
            <Text style={styles.Forgotpassword} >Forgotten Password?</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.Login1} >
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}} style={styles.ButtonLogin2} >
             <Text style={styles.LoginText}> Create New Facebook Account </Text>
            </TouchableOpacity>
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
        height:h('30%'),
        width:w('100%'),
     },
     text:{
         fontSize: 13,
         fontWeight:'bold',
     },
     InputContainer:{
         marginTop: h('14%'),
        height:h('25%'),
        width:w('100%'),
        // backgroundColor:'#ada',
     },
     TextInput:{
        height: 40,
        margin: 10,
        padding: 10,
        borderBottomWidth:0.4,
     },
     TextInput2:{
        height: 40,
        margin: 10,
        padding: 10,
        borderBottomWidth:0.7,
     },
     ButtonLogin:{
        alignItems:'center',
        justifyContent:'center',
        height:h('8%'),
        width:w('90%'),
        backgroundColor:'#00FF',
        alignItems:'center',
        borderWidth: h('0.01%'),
        borderRadius:h('1%'),
        marginBottom: h('1%'),
     },
     Login:{
         alignItems:'center',
         marginBottom: h('7%')
     },
     LoginText:{
         color:'#ffff',
         fontWeight:'bold',
         fontSize:18,
     },
     Forgotpassword:{
         color:'#00FF',
         fontWeight:'bold',
         fontSize: 15,
     },
     separator: {
        marginVertical: 4,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      ButtonLogin2:{
        alignItems:'center',
        justifyContent:'center',
        height:h('8%'),
        width:w('90%'),
        backgroundColor:'#008000',
        alignItems:'center',
        borderWidth: h('0.01%'),
        borderRadius:h('1%'),   
     },
     Login1:{
         height:h('10%'),
        alignItems:'center',
        // backgroundColor:'#faf',
        marginTop:h('5%')
    },
})