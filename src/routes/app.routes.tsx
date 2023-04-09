import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import { SignIn } from "../pages/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="signUp" component={SignIn} />
    </Navigator>
  );
}
