import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter, useLocalSearchParams, router } from "expo-router";
import supabase from "../utils/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const credentials = () => {
  const [codigo, setCodigo] = useState(null);
  const [nip, setNip] = useState(null);
  const [validCredentials, setValidCredentials] = useState(true);
  const { email } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/images/cucei-logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        <TextInput
          placeholder="Código"
          keyboardType="numeric"
          style={{ borderBottomWidth: 2, borderColor: "#1a2b62", width: "60%" }}
          onChangeText={(e) => setCodigo(e)}
          value={codigo}
        />
        <TextInput
          placeholder="Nip"
          secureTextEntry={true}
          style={{ borderBottomWidth: 2, borderColor: "#1a2b62", width: "60%" }}
          onChangeText={(e) => setNip(e)}
          value={nip}
        />
        {!validCredentials && (
          <Text style={{ color: "red", margin: 5 }}>
            Credenciales incorrectas
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            if (!codigo || !nip) {
              setValidCredentials(false);
              return;
            }
            supabase.auth
              .signUp({
                email: email,
                password: nip,
                options: {
                  data: {
                    codigo: codigo,
                  },
                },
              })
              .then((data) => {
                AsyncStorage.setItem("nip", nip).then(() =>
                  router.replace("home")
                );
              })
              .catch((e) => setValidCredentials(false));
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
    </View>
  );
};

export default credentials;
