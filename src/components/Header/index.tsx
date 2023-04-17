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
import { useAuth } from "../../hooks/auth";

export function Header() {
  const theme = useTheme();
  const { user, signOut } = useAuth();

  return (
    <Container>
      <ContentWrapper>
        <Hi>
          Olá, <Name>{user.name}</Name>
        </Hi>

        <Heading>O que você vai aprender hoje?</Heading>
      </ContentWrapper>
      <SignOutButton onPress={signOut}>
        <SignOut color={theme.colors.white} size={28} />
      </SignOutButton>
    </Container>
  );
}
