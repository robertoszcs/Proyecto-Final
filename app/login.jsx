import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { router } from "expo-router";
import { supabase } from "../utils/supabase";

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@alumnos\.udg\.mx$/;
  return emailPattern.test(email);
};

const login = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

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
          onChangeText={(e) => setEmail(e.toLowerCase())}
          value={email}
        />
        {!validEmail && (
          <Text style={{ color: "red", margin: 5 }}>Email incorrecto</Text>
        )}
        <TouchableOpacity
          onPress={() => {
            if (!validateEmail(email)) {
              setValidEmail(false);
            } else {
              setValidEmail(true);
              router.push({ pathname: "credentials", params: { email } });
            }
          }}
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
