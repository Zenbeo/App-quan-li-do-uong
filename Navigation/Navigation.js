// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Apps/LoginScreen/Login';
import TableProduct from '../Apps/TableScreen/TableProduct';
import UITab from './UITab';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login'  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UITab" component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Navigation;
