// src/screens/SplashScreen/SplashScreen.tsx
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação de fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Redireciona para Onboarding após 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding" as never);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Video
          source={require("../../../assets/SK_MONTION.mp4")} // ou .mov
          rate={1.0}
          volume={1.0}
          isMuted={false}
          shouldPlay
          isLooping
          resizeMode={ResizeMode.CONTAIN} // ⚡ aqui está a correção
          style={styles.video}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: width * 0.6,
    height: width * 0.6,
  },
});
