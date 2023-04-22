import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/home'
import List from '../screens/list'

const Stack = createStackNavigator()
const Modal = createStackNavigator()

const Main = () => {
    return <Stack.Navigator>
        <Stack.Screen name = 'Home' component = { Home } options = {{ headerShown: false }} />
    </Stack.Navigator>
}

const Root = () => {
    return <Modal.Navigator screenOptions = {{ presentation: 'modal' }}>
        <Modal.Screen name = 'Main' component = { Main } options = {{ headerShown: false }} />
        <Modal.Screen name = 'List' 
                      component = { List } 
                      options = { ({ navigation, route }) => ({ 
                        title: route.params.title,
                        headerTitleAlign: 'center', 
                        headerLeft: null,
                        headerRight: () => <TouchableOpacity style = {{ marginRight: 10 }} onPress = { () => navigation.pop() }>
                            <Icon name = 'close' size = { 20 } color = 'black' />
                        </TouchableOpacity>                      
                      }) } />
    </Modal.Navigator>
}

export default Root