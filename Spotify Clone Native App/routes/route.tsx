import { ColorSchemeName, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AntDesign, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/colors';
import useColorScheme from '../hooks/color';
import { BaseStackParamList, BottomNavParamList } from '../types';

import Home from '../screens/home';
import Search from '../screens/search';
import Library from '../screens/library';
import Premium from '../screens/premium';
import Details from '../screens/details';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme = { colorScheme === 'dark' ? DarkTheme : DefaultTheme }>
      <BottomNav />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator<BottomNavParamList>();

function BottomNav() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator initialRouteName = "Home" screenOptions = {{ tabBarActiveTintColor: Colors[colorScheme].tint }}>
      <Tab.Screen name = "Home"
                  component = { StackNav }
                  options = { () => ({ 
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Entypo name = "home" color = { color } size = { 20 } />
                  }) } />
      <Tab.Screen name = "Search"
                  component = { Search }
                  options = { () => ({
                    headerShown: false,
                    tabBarIcon: ({ color }) => <EvilIcons name = "search" color = { color } size = { 20 } />
                  }) } />
      <Tab.Screen name = "Library"
                  component = { Library }
                  options = { () => ({
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name = "reorder-vertical" color = { color } size = { 20 } />
                  }) } />
      <Tab.Screen name = "Premium"
                  component = { Premium }
                  options = { () => ({
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name = "spotify" color = { color } size = { 20 } />
                  }) } />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<BaseStackParamList>();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Base" 
                    component = { Home } 
                    options = {{ headerShown: false }} />
      <Stack.Screen name = "Details" 
                    component = { Details } 
                    options = {{
                      headerTitle: '',
                      headerStyle: { backgroundColor: '#000' },
                      headerRight: () => {
                        return (
                          <View style = {{ flexDirection: 'row', marginRight: 11 }}>
                            <AntDesign name = "hearto" size = { 20 } style = {{ marginRight: 11 }} color = "white" />
                            <Entypo name = "dots-three-vertical" size = { 20 } color = "white" />
                          </View>
                        )
                      }
                    }} />
    </Stack.Navigator>
  );
}