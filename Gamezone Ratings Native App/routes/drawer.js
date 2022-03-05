import { createDrawerNavigator } from 'react-navigation-drawer' 
import { createAppContainer } from 'react-navigation'
import homeStack from './home'
import aboutStack from './about'

const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: homeStack
    },
    About: {
        screen: aboutStack
    }
})

export default createAppContainer(drawerNavigator)