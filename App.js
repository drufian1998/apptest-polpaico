import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/homescreen/HomeScreen';
import GlossaryScreen from './src/views/glossaryscreen/GlossaryScreen';
import NextScreen from './src/views/nextscreen/NextScreen';
import FourthScreen from './src/views/fourthscreen/FourthScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Glossary"
          component={GlossaryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FourthScreen"
          component={FourthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
