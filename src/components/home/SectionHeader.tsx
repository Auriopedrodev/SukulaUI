import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeMore}>Ver mais</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "#2C2C2C",
  },
  seeMore: {
    fontSize: 12,
    color: "#0080CB",
    fontFamily: "Montserrat_600SemiBold",
  },
});
