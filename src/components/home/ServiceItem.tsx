import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ServiceItemProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
}

export default function ServiceItem({ icon, label }: ServiceItemProps) {
  return (
    <View style={styles.serviceItem}>
      <Ionicons name={icon} size={28} color="#0080CB" />
      <Text style={styles.serviceText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceItem: {
    alignItems: "center",
  },
  serviceText: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
});
