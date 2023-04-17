import { MagnifyingGlass } from "phosphor-react-native";
import { Container, Icon, TextInput } from "./styles";
import { useTheme } from "styled-components";

export function Input() {
  const theme = useTheme();

  return (
    <Container>
      <Icon color={theme.colors.white} />
      <TextInput
        placeholder="Procure planetas, asteroides, estrelas..."
        placeholderTextColor={theme.colors.white}
      />
    </Container>
  );
}
