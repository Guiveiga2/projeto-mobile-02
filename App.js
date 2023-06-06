import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './homepage';
import ItemDetailPage from './itemdetailpage';
import { ContactPage } from './contato';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ItemDetail" component={ItemDetailPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
