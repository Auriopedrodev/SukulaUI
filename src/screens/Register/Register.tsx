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

export default function Register() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.blueArea}>
        <Text style={styles.logo}>SUKULA</Text>
      </View>

      <View style={styles.whiteCard}>
        <Text style={styles.title}>Criar Conta</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} />
          <TextInput placeholder="Nome Completo" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} />
          <TextInput
            placeholder="+244 900 000 000"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} />
          <TextInput
            placeholder="Palavra-passe"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        <Text style={styles.otherAccounts}>
          Acessa a partir de outras contas
        </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={22} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0080CB" },
  blueArea: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    color: "#2C2C2C",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 15,
    borderColor: "#ccc",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    backgroundColor: "#0080CB",
    padding: 15,
    borderRadius: 8,
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
  otherAccounts: {
    marginTop: 30,
    textAlign: "center",
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
