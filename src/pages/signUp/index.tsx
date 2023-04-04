import { Container, Heading, LoginButton, LoginButtonText, Title } from "./styles";

import backgroundSolar from "../../assets/background.png";

export function SignUp() {
  return (
    <Container
      source={backgroundSolar}
    >
      <Heading>Aperte o cinto</Heading>
      <Title>Comece sua jornada pelo sistema solar.</Title>

      <Heading>Pronto para a decolagem?</Heading>
      
      <LoginButton>
        <LoginButtonText>Começar agora</LoginButtonText>
      </LoginButton>
    </Container>
  )
} 