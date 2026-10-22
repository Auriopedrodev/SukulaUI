import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceItem from "../../components/home/ServiceItem";
import LaundryCard from "../../components/home/LaundryCard";
import SectionHeader from "../../components/home/SectionHeader";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>SUKULA</Text>
        <Text style={styles.location}>Avenida Samora Machel</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SERVIÇOS */}
        <SectionHeader title="Serviços" />
        <View style={styles.services}>
          <ServiceItem icon="shirt-outline" label="Roupa" />
          <ServiceItem icon="water-outline" label="Lavagem" />
          <ServiceItem icon="home-outline" label="Casa" />
          <ServiceItem icon="car-outline" label="Automóveis" />
        </View>

        {/* LAVANDARIAS */}
        <SectionHeader title="Lavandarias" />
        <LaundryCard name="Nzongi Clean" address="Talatona" />
        <LaundryCard name="Shoes Clean" address="Kinaxixi, Luanda" />
      </ScrollView>

      {/* MENU INFERIOR */}
      <View style={styles.bottomMenu}>
        <Ionicons name="home" size={26} color="#0080CB" />
        <Ionicons name="search-outline" size={26} color="#777" />
        <Ionicons name="list-outline" size={26} color="#777" />
        <Ionicons name="person-outline" size={26} color="#777" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },
  logo: {
    fontSize: 26,
    fontFamily: "Montserrat_700Bold",
    color: "#0080CB",
  },
  location: {
    fontSize: 13,
    fontFamily: "Montserrat_400Regular",
    color: "#2C2C2C",
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  bottomMenu: {
    height: 60,
    borderTopWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
