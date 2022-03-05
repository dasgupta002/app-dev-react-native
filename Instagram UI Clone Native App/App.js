import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Root from './routes/root';
import Story from './routes/story';

const customFonts = {
  Lobster: require("./assets/fonts/lobster.otf"),
  AlexBrush: require("./assets/fonts/alexbrush.ttf"),
  ZackAndSarah: require("./assets/fonts/Zack And Sarah.ttf"),
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Root" component = { Root } options = {{ headerShown: false }} />
        <Stack.Screen name = "Story" component = { Story } options = {{ headerShown: false }} />
      </Stack.Navigator>        
    </NavigationContainer>
  );
}