import { View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './component/ProductWrapper';
import UserList from './component/UserList';
import Header from './component/Header';
import Product from './component/Product';
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} />
        {/* <Stack.Screen name="Header" component={Product} /> */}
        {/* <Stack.Screen name="User" component={UserList} /> */}

        {/* <Stack.Screen name="Header" component={Header} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
