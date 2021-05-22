import React, {useState} from 'react';
import {Text, TextInput, View, StatusBar} from 'react-native';
import {Login} from './screens/Containers/login/index';
import {Welcome} from './screens/Containers/welcome/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
