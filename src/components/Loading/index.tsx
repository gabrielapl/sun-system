import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";

export function Loading() {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator size={64} color={theme.colors.white} />
    </Container>
  );
}
