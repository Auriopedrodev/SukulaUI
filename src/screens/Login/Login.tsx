import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.blueArea}>
        <Text style={styles.logo}>SUKULA</Text>
      </View>

      <View style={styles.whiteCard}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Qualquer momento e em qualquer lugar.</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#444" />
          <TextInput
            placeholder="E-mail / Número de telefone"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#444" />
          <TextInput
            placeholder="Palavra-passe"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.linkRight}>Esqueci a palavra-passe?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.otherAccounts}>
          Acessa a partir de outras contas
        </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={22} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={26} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.createAccount}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.link}>Não tem conta? Criar Conta</Text>
        </TouchableOpacity>
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
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontFamily: "Montserrat_400Regular",
  },
  linkRight: {
    textAlign: "right",
    color: "#0080CB",
    marginBottom: 20,
    fontFamily: "Montserrat_600SemiBold",
  },
  button: {
    backgroundColor: "#0080CB",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
  otherAccounts: {
    marginTop: 30,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    gap: 25,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 55,
    height: 55,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  createAccount: {
    marginTop: 35,
  },
  link: {
    textAlign: "center",
    color: "#0080CB",
    fontFamily: "Montserrat_600SemiBold",
  },
});
