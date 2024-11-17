import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Map from "../components/Map";
import { router } from "expo-router";

const home = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Header />
      <View
        style={{
          height: "75%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ width: "45%", margin: 5 }}>
            <Text
              style={{
                backgroundColor: "#1a2b62",
                borderColor: "#1f6595",
                borderWidth: 2,
                borderRadius: 5,
                padding: 5,
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                textAlign: "center",
              }}
            >
              Realidad Aumentada
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/modulos")}
            style={{ width: "45%", margin: 5 }}
          >
            <Text
              style={{
                backgroundColor: "#1a2b62",
                borderColor: "#1f6595",
                borderWidth: 2,
                borderRadius: 5,
                padding: 5,
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                textAlign: "center",
              }}
            >
              Módulos
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/directorio")}
            style={{ marginRight: 30 }}
          >
            <Text
              style={{
                backgroundColor: "#1a2b62",
                borderColor: "#1f6595",
                borderWidth: 2,
                borderRadius: 5,
                padding: 8,
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                textAlign: "center",
              }}
            >
              Directorio
            </Text>
          </TouchableOpacity>
          <Map width={200} height={250} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
