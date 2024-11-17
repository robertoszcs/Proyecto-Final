import { Image } from "react-native";
import Weather from "./Weather";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Header() {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Weather />
      <Image
        source={require("../assets/images/cucei-logo.png")}
        style={{ width: 150, height: 150 }}
      />
    </SafeAreaView>
  );
}
