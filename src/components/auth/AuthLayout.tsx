import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

// Área azul com o logo e cartão branco usados no Login e no Registo
export default function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.blueArea}>
        <Text style={styles.logo}>SUKULA</Text>
      </View>

      <View style={styles.whiteCard}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0080CB" },
  blueArea: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
  },
  whiteCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    marginTop: -20,
  },
  title: {
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    color: "#2C2C2C",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 25,
    fontFamily: "Montserrat_400Regular",
  },
});
