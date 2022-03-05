import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigator = { navigation } title = "About GameZone" /> 
            }
        }
    }
}

const aboutStack = createStackNavigator(screens, { 
    defaultNavigationOptions: {
        headerStyleInterpolator: '#444', 
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
         } 
    } 
})

export default aboutStack