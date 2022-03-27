import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homescreen from './homescreen/homescreen';
import daftar from './daftar/index';
import batal from './batal/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='homescreen' component={homescreen} />
        <Stack.Screen name='daftar' component={daftar} />
        <Stack.Screen name='batal' component={batal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;