import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { useTheme } from "styled-components";
import { Heart, MagnifyingGlass, House } from "phosphor-react-native";
import { Text, Platform } from "react-native";
import { Favorite } from "../pages/Favorite";
import { Search } from "../pages/Search";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  const androidStyles = {
    backgroundColor: theme.colors.brand_background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopColor: "transparent",
    height: 80,
    paddingTop: 5,
    paddingBottom: 10,
  };

  const iosStyles = {
    backgroundColor: theme.colors.brand_background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopColor: "transparent",
    height: 100,
  };

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.OS == "android" ? androidStyles : iosStyles,
        tabBarLabel: ({ children, focused }) => {
          return focused ? (
            <Text
              style={{
                fontFamily: theme.fonts.bold,
                fontSize: 14,
                color: theme.colors.white,
              }}
            >
              {children}
            </Text>
          ) : null;
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <House color={theme.colors.white} size={24} />;
          },
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: "Procurar",
          tabBarIcon: () => {
            return <MagnifyingGlass color={theme.colors.white} size={24} />;
          },
        }}
      />
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: "Favoritos",
          tabBarIcon: () => {
            return <Heart color={theme.colors.white} size={24} />;
          },
        }}
      />
    </Navigator>
  );
}
