import { StatusBar } from 'react-native';
import Home from "./src/pages/Home";
import Qible from './src/pages/Qible';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from './src/pages/Location';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Qible" component={Qible} options={{headerShown:false}}/> */}
        <Stack.Screen name="Location" component={Location} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
