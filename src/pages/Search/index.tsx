import { BackButton } from "../../components/BackButton";
import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { SpaceEntityCard } from "../../components/SpaceEntityCard";
import { Container, Content, Header, MayAlsoLikeText, Title } from "./styles";

export function Search() {
  return (
    <Background>
      <Container>
        <Header>
          <BackButton />
        </Header>

        <Title>Resultados da busca</Title>

        <Input />

        <Content>
          <SpaceEntityCard />
          <MayAlsoLikeText>Você também pode gostar</MayAlsoLikeText>
          <SpaceEntityCard />
        </Content>
      </Container>
    </Background>
  );
}
