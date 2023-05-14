import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../pages/Home";
import { Favorite } from "../../pages/Favorite";
import { Search } from "../../pages/Search";
import { Entity } from "../../pages/Entity";

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="spaceEntity" component={Entity} />
    </Navigator>
  );
}

export function SearchStackScreen() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Search" component={Search} />
      <Screen name="spaceEntity" component={Entity} />
    </Navigator>
  );
}

export function FavoriteStackScreen() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Favorite" component={Favorite} />
      <Screen name="spaceEntity" component={Entity} />
    </Navigator>
  );
}
