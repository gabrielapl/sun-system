import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        {!fontsLoaded ? <Loading /> : <Routes />}
      </ThemeProvider>
    </AuthProvider>
  );
}
