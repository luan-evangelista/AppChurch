import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home';
import Assorteds from './screens/Assorteds';

const AuthStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <AuthStack.Screen name="Assorteds" component={Assorteds} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;