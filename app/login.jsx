import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { router } from "expo-router";

const login = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Header />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
        }}
      >
        <TextInput
          placeholder="Correo institucional"
          style={{ borderBottomWidth: 2, borderColor: "#1a2b62", width: "60%" }}
        />
        <TouchableOpacity
          onPress={() => router.replace("/home")}
          style={{
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "#1f6595",
            width: "60%",
            margin: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "#1a2b62",
              color: "white",
              padding: 8,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Ingresar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default login;
