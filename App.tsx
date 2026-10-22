// App.tsx
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return <AppNavigator />;
}
