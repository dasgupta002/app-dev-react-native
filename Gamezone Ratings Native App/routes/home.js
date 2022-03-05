import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import Review from '../screens/review'
import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigator = { navigation } title = "GameZone" /> 
            }
        }
    },
    Review: {
        screen: Review,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const homeStack = createStackNavigator(screens, { 
    defaultNavigationOptions: {
        headerStyleInterpolator: '#444', 
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
         } 
    } 
})

export default homeStack