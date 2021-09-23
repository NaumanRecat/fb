import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screen/SignIn';


const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}