import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

// Botões de acesso com Google e Apple
export default function SocialLogin() {
  return (
    <>
      <Text style={styles.otherAccounts}>Acessa a partir de outras contas</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={22} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={26} color="#000" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});
