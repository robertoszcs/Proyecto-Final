import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import PieChart from "react-native-pie-chart";
import supabase from "../utils/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const modulos = () => {
  const [foto, setFoto] = useState("");
  const [nombre, setNombre] = useState(null);
  const [carrera, setCarrera] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [estatus, setEstatus] = useState(null);

  const [codigo, setCodigo] = useState(null);
  const [nip, setNip] = useState(null);

  const [series, setSeries] = useState(null);
  const [creditos, setCreditos] = useState(0);
  const [creditosRequeridos, setCreditosRequeridos] = useState(0);
  const [materias, setMaterias] = useState(null);

  useEffect(() => {
    supabase.auth
      .getUser()
      .then(({ data }) => setCodigo(data.user.user_metadata.codigo))
      .catch((e) => console.log(e));

    fetch("http://cuceimobile.space/Escuela/kardex.php")
      .then((response) => response.json())
      .then((data) => {
        let serie = data.materias.map((materia) => materia.creditos);
        setSeries(serie);
        setCreditos(data.creditosAdquiridos);
        setCreditosRequeridos(data.creditosRequeridos);
        setMaterias(data.materias);
      });

    AsyncStorage.getItem("nip").then((data) => {
      setNip(data);
    });
  }, []);

  useEffect(() => {
    if (!codigo) return;
    var fotoXhttp = new XMLHttpRequest();

    fotoXhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setFoto(this.responseText);
      }
    };

    fotoXhttp.open(
      "GET",
      `http://148.202.152.33/cucei/fotoA.php?codigo=${codigo}`,
      true
    );
    fotoXhttp.send();
  }, [codigo]);

  useEffect(() => {
    if (!nip) return;
    let datosXhttp = new XMLHttpRequest();
    datosXhttp.open(
      "GET",
      `http://148.202.152.33/cucei/credenciales.php?codigo=${codigo}&nip=${nip}`,
      true
    );
    datosXhttp.onreadystatechange = () => {
      if (datosXhttp.readyState === XMLHttpRequest.DONE) {
        const status = datosXhttp.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          const datos = JSON.parse(datosXhttp.responseText);

          setNombre(datos.nombre);
          setCarrera(datos.carrera[0].descripcion);
          setTipoUsuario(datos.tipoUsuario);
          setEstatus(datos.estatus);
        }
      }
    };

    datosXhttp.send();
  }, [foto]);

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#1a2b62",
            width: "100%",
          }}
        >
          {foto && (
            <Image source={{ uri: foto }} style={{ width: 125, height: 125 }} />
          )}
          <View
            style={{
              justifyContent: "space-around",
              marginLeft: 5,
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {carrera}
            </Text>
            <Text style={{ color: "white" }}>{nombre}</Text>
            <Text style={{ color: "white" }}>{tipoUsuario}</Text>
            <Text style={{ color: "white" }}>{estatus}</Text>
          </View>
        </View>
        {series && (
          <PieChart
            style={{ marginTop: 30 }}
            widthAndHeight={125}
            series={series}
            sliceColor={sliceColor}
          />
        )}
        <Text
          style={{
            margin: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: "#1a2b62",
          }}
        >
          Creditos Adquiridos: {creditos}/{creditosRequeridos}
        </Text>
      </View>
      {materias && (
        <FlatList
          data={materias}
          renderItem={({ item }) => {
            return (
              <View
                style={{ borderWidth: 2, borderColor: "#1a2b62", padding: 5 }}
              >
                <Text style={{ color: "#1a2b62", fontWeight: "bold" }}>
                  {item.descripcion}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 3, color: "#1a2b62" }}>
                    Calificación: {item.calificacion}
                  </Text>
                  <Text style={{ flex: 1, color: "#1a2b62" }}>
                    Créditos: {item.creditos}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.nrc}
          style={{ margin: 10 }}
        />
      )}
    </SafeAreaView>
  );
};

export default modulos;

const sliceColor = [
  "#1a2b62",
  "#3db024",
  "#f23c5d",
  "#ff9914",
  "#2e8b57",
  "#6a0dad",
  "#e32636",
  "#4682b4",
  "#dda0dd",
  "#ff6347",
  "#40e0d0",
  "#ff4500",
  "#8a2be2",
  "#5f9ea0",
  "#7fffd4",
  "#9932cc",
  "#b22222",
  "#ff69b4",
  "#556b2f",
  "#8b008b",
  "#ff8c00",
  "#32cd32",
  "#ba55d3",
  "#00ced1",
  "#00bfff",
  "#8fbc8f",
  "#c71585",
  "#ff1493",
  "#808000",
  "#adff2f",
  "#7cfc00",
  "#d2691e",
  "#ffdead",
  "#cd5c5c",
  "#f4a460",
  "#20b2aa",
  "#d8bfd8",
  "#8b4513",
  "#dc143c",
  "#87cefa",
  "#00fa9a",
  "#4682b4",
  "#ff7f50",
  "#ee82ee",
  "#daa520",
  "#00ff00",
  "#00ffff",
  "#8a2be2",
  "#6b8e23",
  "#9932cc",
  "#ff00ff",
];
