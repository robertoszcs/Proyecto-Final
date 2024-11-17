import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";

export default function Weather() {
  const [clima, setClima] = useState(null);
  const [imagen, setImagen] = useState(null);
  const ciudad = "Guadalajara";

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=e52b6455eed243148c7205407240909&q=" +
        ciudad
    )
      .then((res) => res.json())
      .then((data) => {
        setImagen(data.current.condition.icon);
        setClima(data.current);
      });
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      {imagen && (
        <Image source={{ uri: "http:" + imagen }} width={75} height={75} />
      )}
      {clima ? (
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            {clima.temp_c}°
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#193b7e",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {ciudad}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <View>
              <Image
                source={require("../images/wind.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text>{clima.wind_kph} kph</Text>
            </View>
            <View>
              <Image
                source={require("../images/humidity.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text>{clima.humidity} %</Text>
            </View> */}
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
