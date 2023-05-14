import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";
import { TouchableOpacity } from "react-native";
import { SignOut } from "phosphor-react-native";

export function SignOutButton() {
  const theme = useTheme();
  const { signOut } = useAuth();

  return (
    <TouchableOpacity onPress={signOut}>
      <SignOut color={theme.colors.white} size={28} />
    </TouchableOpacity>
  );
}
