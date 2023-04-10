import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="signUp" component={SignIn} />
    </Navigator>
  );
}
