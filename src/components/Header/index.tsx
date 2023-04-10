import { useTheme } from "styled-components";
import {
  Container,
  ContentWrapper,
  Heading,
  Hi,
  Name,
  SignOutButton,
} from "./styles";

import { SignOut } from "phosphor-react-native";

export function Header() {
  const theme = useTheme();

  return (
    <Container>
      <ContentWrapper>
        <Hi>
          Olá, <Name>Ana Cecília</Name>
        </Hi>

        <Heading>O que você vai aprender hoje?</Heading>
      </ContentWrapper>
      <SignOutButton>
        <SignOut color={theme.colors.white} size={28} />
      </SignOutButton>
    </Container>
  );
}
