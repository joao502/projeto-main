import React from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './src/pages/Welcome/index.js';
import Login from './src/pages/Login/Login.js';
import Home from './src/pages/Home/index.js';
import Settings from './src/pages/Settings/index.js';
import Reports from './src/pages/Reports/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
       name='Welcome'
        component={Welcome}
         />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
          title: ''
        }}
      />
      <Stack.Screen
        name='Home'
        component={TabNavigate}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#08DBB8'
          }
        }}
      />
      <Stack.Screen
        name='Reports'
        component={Reports}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#08DBB8'
          }
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name='home' color='#08DBB8' size={24} />
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Ionicons name='settings' color='#08DBB8' size={24} />
          )
        }}
      />
      <Tab.Screen
        name='Reports'
        component={Reports}
        options={{
          tabBarIcon: () => (
            <Ionicons name='alert-circle' color='#08DBB8' size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
  );
}
