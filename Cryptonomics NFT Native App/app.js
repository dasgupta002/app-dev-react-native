import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import Parent from './screens/parent'
import Summary from './screens/summary'

const Stack = createStackNavigator()
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

const App = () => {
  const [loaded] = useFonts({
    'TrashHand': require('./assets/fonts/TrashHand.ttf')
  })

  if (!loaded) return null

  return (
    <NavigationContainer theme = { theme }>
      <Stack.Navigator screenOptions = {{ headerShown: false }}>
        <Stack.Screen name = 'Parent' component = { Parent } />
        <Stack.Screen name = 'Summary' component = { Summary } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App