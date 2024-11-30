import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="credentials"
        options={{
          title: "Iniciar Sesión",
          headerStyle: { backgroundColor: "#1a2b62" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
        }}
      />
      <Stack.Screen
        name="directorio"
        options={{
          title: "Directorio",
          headerStyle: { backgroundColor: "#1a2b62" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
        }}
      />
      <Stack.Screen
        name="modulos"
        options={{
          title: "Módulos",
          headerStyle: { backgroundColor: "#1a2b62" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
        }}
      />
    </Stack>
  );
};

export default Layout;
