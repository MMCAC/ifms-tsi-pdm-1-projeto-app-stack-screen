import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação das telas
import HomeScreen from './components/pages/HomeScreen';
import ProfileScreen from './components/pages/ProfileScreen';
import ConfigScreen from './components/pages/ConfigScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Início" }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: "Perfil" }}
        />
        <Stack.Screen 
          name="Config" 
          component={ConfigScreen} 
          options={{ title: "Configuração" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;