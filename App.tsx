import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { createStaticNavigation } from '@react-navigation/native';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from '@/pages/home';
import { RootStack } from '@/router';

export default function App() {
  const Navigation = createStaticNavigation(RootStack);
  return (
    <Navigation />
  );
  // return (
  //   <SafeAreaProvider>
  //     <ScreenContent title="Home" path="App.tsx"></ScreenContent>
  //     <StatusBar style="auto" />
  //   </SafeAreaProvider>
  // );
}
