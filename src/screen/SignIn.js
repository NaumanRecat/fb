import React from "react";
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';


import { Signup } from '../screen/Signup';

export class SignIn extends React.Component{

    state = {
        name: '',
        fname: '',
        email: '',
        phone: '',    
      };

      useradd = () => {
        const {name, fname, email, phone} = this.state;
    
        if (name === '' || fname === '' || email === '' || phone === '') {
          Alert.alert('Fill all fields');
        } else {
          const getData = {
            userName: this.state.name.toUpperCase(),
            fatherName: this.state.fname.toUpperCase(),
            useremail: this.state.email.toLowerCase(),
            userPhone: this.state.phone,
          };
          this.props.navigation.navigate('Signup', {values: getData});
        }
      };

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
                <TextInput onChangeText={(name) => this.setState({name})} value={this.state.name} style={styles.TextInput} placeholder={'Name'} />
                <TextInput onChangeText={(fname) => this.setState({fname})} value={this.state.fname} style={styles.TextInput2} placeholder={'Father Name'}/>
                <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email} style={styles.TextInput2} placeholder={'Email'}/>
                <TextInput onChangeText={(phone) => this.setState({phone})} value={this.state.phone} style={styles.TextInput2} placeholder={'phone'}/>
            </View>

            <View style={styles.Login} >
            <TouchableOpacity   onPress={() => { this.useradd(); }} style={styles.ButtonLogin} >
             <Text style={styles.LoginText}> Log In</Text>
            </TouchableOpacity>
            <Text style={styles.Forgotpassword} >Forgotten Password?</Text>
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
     },
     Login:{
         alignItems:'center',
         height: h('17%'),
         marginTop: h('20%')
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
     
})