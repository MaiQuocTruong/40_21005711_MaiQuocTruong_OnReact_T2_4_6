import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Screen_01';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen 
          name="Screen01" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Ẩn header cho màn hình đăng nhập
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}