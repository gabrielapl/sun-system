import {
  ButtonHeading,
  ButtonWrapper,
  Container,
  Content,
  HeaderContent,
  Heading,
  LoginButton,
  LoginButtonBackground,
  LoginButtonText,
  Title,
} from "./styles";

import backgroundSolar from "../../assets/background.png";
import { useTheme } from "styled-components";
import { ArrowRight } from "phosphor-react-native";
import { View } from "react-native";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { singInWithGoogle, isUserLoading } = useAuth();
  const theme = useTheme();

  return (
    <Container source={backgroundSolar}>
      <Content>
        <View />

        <HeaderContent>
          <Heading>Aperte o cinto</Heading>
          <Title>Comece sua jornada pelo sistema solar.</Title>
        </HeaderContent>

        <ButtonWrapper>
          <ButtonHeading>Pronto para a decolagem?</ButtonHeading>

          <LoginButton disabled={isUserLoading} onPress={singInWithGoogle}>
            <LoginButtonBackground colors={theme.colors.gradient.button}>
              <LoginButtonText>Começar agora</LoginButtonText>
              <ArrowRight color={theme.colors.white} />
            </LoginButtonBackground>
          </LoginButton>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
