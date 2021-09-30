import React from "react";
import {View, Text, Button, SafeAreaView} from 'react-native';

export class State extends React.Component{
    state={
        name:'nauman',
        age: '25',
    }
    render (){
        // let name = 'Mano'
        <SafeAreaView/>
        return(
            <View>
                {
                    this.state.name ? <View><Text> {this.state.name} </Text></View>: <View><Text> Kinza  </Text></View>
                }
                <Button
                title="Change Name"
                color="green"
                onPress={()=>{
                    this.setState({name:""})
                }}
                />

                <Text 
                    numberOfLines={2}
                    ellipsizeMode="clip"
                > I love you you Kinza </Text>
            </View>
        )
    }
}