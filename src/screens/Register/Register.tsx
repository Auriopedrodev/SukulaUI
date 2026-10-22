import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import SocialLogin from "../../components/auth/SocialLogin";

export default function Register() {
  const navigation = useNavigation<any>();

  return (
    <AuthLayout title="Criar Conta">
      <View style={styles.spacer} />
      <AuthInput icon="person-outline" placeholder="Nome Completo" />
      <AuthInput
        icon="call-outline"
        placeholder="+244 900 000 000"
        keyboardType="phone-pad"
      />
      <AuthInput
        icon="lock-closed-outline"
        placeholder="Palavra-passe"
        secureTextEntry
      />

      <PrimaryButton
        label="Criar"
        style={styles.button}
        onPress={() => navigation.navigate("Welcome")}
      />

      <SocialLogin />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 15,
  },
  button: {
    marginTop: 10,
  },
});
