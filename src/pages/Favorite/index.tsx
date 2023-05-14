import { BackButton } from "../../components/BackButton";
import { Background } from "../../components/Background";
import { SpaceEntityCard } from "../../components/SpaceEntityCard";
import { Header, Title } from "../Search/styles";
import { Container, FavoriteList } from "./styles";

export function Favorite() {
  return (
    <Background>
      <Container>
        <Header>
          <BackButton />
        </Header>

        <Title>Favoritos</Title>

        <FavoriteList
          data={[1, 2, 3, 4]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <SpaceEntityCard isFavoriteCard />}
        />
      </Container>
    </Background>
  );
}
