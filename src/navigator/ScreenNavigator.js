import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screen/SignIn';
import {Signup} from '../screen/Signup';
import { Dashboard } from '../screen/Dashboard';
import {State} from '../screen/State';


const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="State" component={State}  options={{headerShown:false}} />
      <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown:false}} />
      <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}