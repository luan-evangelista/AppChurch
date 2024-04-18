import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default App;