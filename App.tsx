import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { StatusBar } from "expo-status-bar";
import { SignIn } from "./src/pages/SignIn";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/pages/Home";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {!fontsLoaded ? <Loading /> : <Routes />}
    </ThemeProvider>
  );
}
