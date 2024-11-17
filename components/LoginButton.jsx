import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const LoginButton = () => {
  return (
    <Link href={"login"} style={{ justifyContent: "center" }}>
      <View>
        <Image
          source={require("../assets/images/login.png")}
          style={{ width: 70, height: 70 }}
        />
        <Text style={{ textAlign: "center", fontSize: 16, color: "#3b70b2" }}>
          Login
        </Text>
      </View>
    </Link>
  );
};

export default LoginButton;
