import React from "react";
import {View, Text, Button} from 'react-native';

export class State extends React.Component{
    state={
        name:'ali',
        age: '25',
    }
    render (){
        // let name = 'Mano'
        return(
            <View>
                {
                    this.state.name ? <View><Text> {this.state.name} </Text></View>: <View><Text> Mahnoor ky Boobs </Text></View>
                }
                <Button
                title="Change Name"
                color="green"
                onPress={()=>{
                    this.setState({name:""})
                }}
                />
            </View>
        )
    }
}