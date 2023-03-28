import { SafeAreaProvider } from 'react-native-safe-area-context';

import useServices from './hooks/services';
import useSchemes from './hooks/color';
import Navigation from './routes/route';

import Player from './components/player'; 

export default function App() {
  const loading = useServices();
  const colorScheme = useSchemes();

  if (!loading) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme = { colorScheme } />
        <Player />
      </SafeAreaProvider>
    );
  }
}