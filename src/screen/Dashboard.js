import React, {useState} from "react";
import {View, Text} from 'react-native';

export class Dashboard extends React.Component{

    Profile = (props) => {
        return(
            <View>
                <Text> {props.name} </Text>
                <Text> {props.fathername} </Text>
            </View>
        )
    }

    Nomi =(props) => {
        const {status, age} = props
        return(
            <View>
            <Text> {status} </Text>
            <Text> {age} </Text>
            </View>
        )
    }

    Method =({love,sex}) => {
        return(
            <View>
            <Text> {love} </Text>
            <Text> {sex} </Text>
            </View>
        )
    }

    render(){
        let name="Amna"
        let age= "23";
        let myarr = [
            {id:"1", task:"Eat"},
            {id:"2", task:"Sleep"},
            {id:"3", task:'Hungry'}
        ]
      
        return(
          <View>
              {
                  myarr.map(item=>{
                      return <Text> {item.task} </Text>
                  })
              }
              {
                  name ? 
                  <View><Text> mahnoor 1 </Text></View>
                   : 
                   <View><Text> mahnoor 2 </Text></View>
              }
              {
                  age && <Text> {age} </Text>
              }
              <this.Profile name="Nauman" fathername="Tariq"/>
              <this.Nomi status="Relation" age="25"/>
              <this.Method love="kainat" sex="3"/>
          </View>

        )
    }
}