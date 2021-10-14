import React, {useState} from "react";
import {View, Text, Button} from 'react-native';



const Nomi =()=> {
    return(
        <Text> Nomi </Text>
    )
}



function Api(){

    const [joke, setjoke] = useState("")

    const getjokes= async ()=>{
    const res = await fetch("http://api.icndb.com/jokes/random?firstName=Kinza&lastName=nauman")
    const result = await res.json()
    setjoke(result.value.joke)
    }
    return(
      <View style={{
          flex:1,
      }}>
          <Nomi/>
        <Button
        title={'Get Jokes'}
        onPress={()=>getjokes()} 
         />
         {
             joke ? <Text> {joke} </Text> : null
         }
      </View>
    )
} 
export default Api;