import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import "../global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { View, Text } from "react-native";
import Logo from "@/components/logo";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    //<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <ThemeProvider value={DarkTheme}>
     <Logo />
      <Stack>
        <Stack.Screen name='(tabs)'options={{headerShown: false}} />
      </Stack>
      <StatusBar style='light' />
    </ThemeProvider>
  );
}
