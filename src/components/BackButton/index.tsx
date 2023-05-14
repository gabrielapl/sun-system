import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

export function BackButton() {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack}>
      <ArrowLeft color={theme.colors.white} size={28} />
    </TouchableOpacity>
  );
}
