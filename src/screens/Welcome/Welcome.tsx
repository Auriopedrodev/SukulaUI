import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SUKULA</Text>

      <Text style={styles.title}>Seja Bem-vindo</Text>

      <Text style={styles.subtitle}>
        Lavandaria feita para ti.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#0080CB",
  },
  logo: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 50,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: "#0080CB",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
});
