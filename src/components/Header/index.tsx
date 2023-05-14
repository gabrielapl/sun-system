import { useTheme } from "styled-components";
import { Container, ContentWrapper, Heading, Hi, Name } from "./styles";

import { SignOut } from "phosphor-react-native";
import { useAuth } from "../../hooks/auth";
import { SignOutButton } from "../SignOutButton";

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
      <SignOutButton />
    </Container>
  );
}
