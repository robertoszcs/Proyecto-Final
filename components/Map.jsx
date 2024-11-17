import { View } from "react-native";
import MapView from "react-native-maps";

export default function Map({height, width}) {
  return (
    <View style={{alignItems: "center", marginTop: 30}}>
      <MapView
        initialRegion={{
          latitude: 20.655051825783147,
          longitude: -103.32547116240904,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        style={{ width: width, height: height}}
      />
    </View>
  );
}
