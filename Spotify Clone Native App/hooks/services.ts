import { useEffect, useState } from 'react';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function loadServices() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ 'comic': require('../assets/fonts/Wonder_Comic.ttf'), 'yew': require('../assets/fonts/YEWBN.ttf') });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(true);
        SplashScreen.hideAsync();
      }
    }

    loadData();
  }, []);

  return loading;
}