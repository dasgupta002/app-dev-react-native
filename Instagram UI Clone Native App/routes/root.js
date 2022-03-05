import { StyleSheet, Text } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/home';
import Trending from '../screens/trending';
import ReelVideo from '../screens/video';
import Notifications from '../screens/notifications';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();

export default function Root() {
    return (
        <Tab.Navigator screenOptions = { ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return <Foundation name = "home" size = { size } color = { color } />;
              } 
                
              if (route.name === 'Discover') {
                return <Feather name = "search" size = { size } color = { color } />;
              } 
                
              if (route.name === 'Reels') {
                return <Feather name = "play-circle" size = { size } color = { color } />;
              } 
              
              if (route.name === 'Notifications') {
                return <ADIcon name = "hearto" size = { size } color = { color } />;
              }
              
              if (route.name === 'Profile') {
                return <Ionicons name = "person-circle-outline" size = { size } color = { color } />;
              }
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'tomato'
        }) }>
            <Tab.Screen name = 'Home' 
                        component = { Home } 
                        options = {{ headerTitle: () => <Text style = { styles.title }>Instagram</Text>, 
                                     headerTitleAlign: 'center',
                                     headerLeft: () => <Feather name = "camera" size = { 20 } color = "tomato" style = {{ marginLeft: 12 }} />, 
                                     headerRight: () => <Ionicons name = "paper-plane-outline" size = { 20 } color = "tomato" style = {{ marginRight: 12 }} /> 
                                  }} />
            <Tab.Screen name = 'Discover' component = { Trending } options = {{ headerShown: false }} />
            <Tab.Screen name = 'Reels' component = { ReelVideo } options = {{ headerShown: false }} />
            <Tab.Screen name = 'Notifications' component = { Notifications } options = {{ headerTitle: () => <Text style = {{ fontFamily: 'AlexBrush', fontSize: 33 }}>Activity</Text> }} />
            <Tab.Screen name = 'Profile' 
                        component = { Settings } 
                        options = {{ headerTitle: () => <Text style = {{ fontFamily: 'AlexBrush', fontSize: 33 }}>ludwig_b</Text>,
                                     headerRight: () => <Feather name = "plus-square" size = { 30 } color = "tomato" style = {{ marginRight: 12 }} />
                                  }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'tomato',
        fontFamily: 'Lobster',
        textAlign: 'center'
    }
});