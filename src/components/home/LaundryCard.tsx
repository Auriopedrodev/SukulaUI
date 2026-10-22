import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface LaundryCardProps {
  name: string;
  address: string;
}

export default function LaundryCard({ name, address }: LaundryCardProps) {
  return (
    <View style={styles.laundryCard}>
      <Text style={styles.laundryName}>{name}</Text>
      <Text style={styles.laundryAddress}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  laundryCard: {
    backgroundColor: "#F7F7F7",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 15,
    borderRadius: 10,
  },
  laundryName: {
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    color: "#2C2C2C",
  },
  laundryAddress: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
    color: "#555",
  },
});
