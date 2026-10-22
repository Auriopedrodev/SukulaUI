import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoundedImage from "../../components/RoundedImage"; // Import do componente

export default function Onboarding() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SUKULA</Text>

      <RoundedImage
        source={require("../../../assets/close-up-hands-washing-laundry.jpg")} // Coloque aqui sua imagem
        size={300}      // tamanho opcional
        radius={15}     // raio das bordas
        style={{ marginBottom: 35 }}
      />

      <Text style={styles.title}>Lavandaria feita para ti.</Text>
      <Text style={styles.subtitle}>Qualquer momento e em qualquer lugar.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Comece</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já tenho uma conta</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.footer}>Ao continuar, você concorda com nossos</Text>
        <Text style={styles.footerLink}>
          Termos de Serviço e Política de Privacidade.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#0080CB",
  },
  logo: {
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    marginBottom: 40,
    color: "#fff",
  },
  title: {
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    color: "#2C2C2C",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
    marginBottom: 40,
    color: "#2C2C2C",
  },
  button: {
    backgroundColor: "#2C2C2C",
    width: "95%",
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 18,
    fontSize: 14,
    color: "#0080CB",
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
    color: "#2C2C2C",
  },
  footerLink: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Montserrat_600SemiBold",
    color: "#0080CB",
  },
});
