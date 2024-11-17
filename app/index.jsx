import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Map from "../components/Map";
import LoginButton from "../components/LoginButton";
import { View } from "react-native";

export default function home() {
  return (
    <SafeAreaView>
      <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <Header />
        <LoginButton />
      </View>
      <Map width={300} height={300} />
    </SafeAreaView>
  );
}
