import Root from './config/navigation'
import { NavigationContainer } from '@react-navigation/native'
import { CurProvider } from './context/store'

export default function App() {
  return <NavigationContainer>
    <CurProvider>
      <Root />
    </CurProvider>
  </NavigationContainer>
}