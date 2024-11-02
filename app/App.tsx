import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JazzScreen from './JazzScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jazz" component={JazzScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
