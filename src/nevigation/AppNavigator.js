import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen/HomeScreen';
import GlossaryScreen from '../views/GlossaryScreen/GlossaryScreen';
import NextScreen from '../views/NextScreen/NextScreen';
import FourthScreen from '../views/FourthScreen/FourthScreen';
import CustomHeader from '../components/CustomHeader';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <CustomHeader /> }} />
    <Stack.Screen name="Glossary" component={GlossaryScreen} options={{ header: () => <CustomHeader /> }} />
    <Stack.Screen name="NextScreen" component={NextScreen} options={{ header: () => <CustomHeader /> }} />
    <Stack.Screen name="FourthScreen" component={FourthScreen} options={{ header: () => <CustomHeader /> }} />
  </Stack.Navigator>
);

export default AppNavigator;
