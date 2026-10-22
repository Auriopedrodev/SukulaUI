import React from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthInputProps extends TextInputProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
}

export default function AuthInput({ icon, style, ...props }: AuthInputProps) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={icon} size={20} color="#444" />
      <TextInput {...props} style={[styles.input, style]} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
