import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { SafeAreaView } from 'react-native';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);


export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Navigation
      linking={{
        enabled: 'auto',
        prefixes: [
          // Change the scheme to match your app's scheme defined in app.json
          'helloworld://',
        ],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
    </SafeAreaView>
  );
}
