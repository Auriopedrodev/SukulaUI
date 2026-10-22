import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import SocialLogin from "../../components/auth/SocialLogin";

export default function Login() {
  const navigation = useNavigation<any>();

  return (
    <AuthLayout
      title="Entrar"
      subtitle="Qualquer momento e em qualquer lugar."
    >
      <AuthInput icon="mail-outline" placeholder="E-mail / Número de telefone" />
      <AuthInput
        icon="lock-closed-outline"
        placeholder="Palavra-passe"
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.linkRight}>Esqueci a palavra-passe?</Text>
      </TouchableOpacity>

      <PrimaryButton label="Entrar" onPress={() => navigation.navigate("Welcome")} />

      <SocialLogin />

      <TouchableOpacity
        style={styles.createAccount}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.link}>Não tem conta? Criar Conta</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  linkRight: {
    textAlign: "right",
    color: "#0080CB",
    marginBottom: 20,
    fontFamily: "Montserrat_600SemiBold",
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
