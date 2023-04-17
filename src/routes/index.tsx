import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./app.routes";
import { AppRoutes } from "./tabs.routes";
import { useAuth } from "../hooks/auth";
import { useTheme } from "styled-components";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export function Routes() {
  const { user, isFetchingToken } = useAuth();

  useEffect(() => {
    if (isFetchingToken === false) {
      SplashScreen.hideAsync();
    }
  }, [isFetchingToken]);

  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
