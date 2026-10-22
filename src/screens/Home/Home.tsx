import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Serviços</Text>
          <Text style={styles.seeMore}>Ver mais</Text>
        </View>

        <View style={styles.services}>
          <ServiceItem icon="shirt-outline" label="Roupa" />
          <ServiceItem icon="water-outline" label="Lavagem" />
          <ServiceItem icon="home-outline" label="Casa" />
          <ServiceItem icon="car-outline" label="Automóveis" />
        </View>

        {/* LAVANDARIAS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Lavandarias</Text>
          <Text style={styles.seeMore}>Ver mais</Text>
        </View>

        <View style={styles.laundryCard}>
          <Text style={styles.laundryName}>Nzongi Clean</Text>
          <Text style={styles.laundryAddress}>Talatona</Text>
        </View>

        <View style={styles.laundryCard}>
          <Text style={styles.laundryName}>Shoes Clean</Text>
          <Text style={styles.laundryAddress}>Kinaxixi, Luanda</Text>
        </View>
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

function ServiceItem({ icon, label }: { icon: any; label: string }) {
  return (
    <View style={styles.serviceItem}>
      <Ionicons name={icon} size={28} color="#0080CB" />
      <Text style={styles.serviceText}>{label}</Text>
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

  services: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  serviceItem: {
    alignItems: "center",
  },
  serviceText: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },

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

  bottomMenu: {
    height: 60,
    borderTopWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
