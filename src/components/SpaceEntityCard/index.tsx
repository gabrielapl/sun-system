import { ArrowRight, BookmarkSimple } from "phosphor-react-native";
import Sun from "../../assets/sun.svg";
import {
  Container,
  Content,
  Header,
  KeepReadingContainer,
  KeepReadingText,
  MiniAbout,
  Title,
} from "./styles";
import { useTheme } from "styled-components";
import { FavoriteButton } from "../FavoriteButton";
import { useNavigation } from "@react-navigation/native";

interface SpaceEntityCardProps {
  isFavoriteCard?: boolean;
}

export function SpaceEntityCard({
  isFavoriteCard = false,
}: SpaceEntityCardProps) {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <Container
      activeOpacity={0.6}
      onPress={() => navigate("spaceEntity")}
      isMarginBottom={isFavoriteCard}
    >
      <Sun width={200} height={200} />

      <Content>
        <Header>
          <Title>Netuno</Title>
          <FavoriteButton isNotFavoriteColor="white" />
        </Header>

        <MiniAbout>
          Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol
          desde a reclassificação...
        </MiniAbout>

        {!isFavoriteCard && (
          <KeepReadingContainer>
            <KeepReadingText>Continue lendo</KeepReadingText>
            <ArrowRight color={colors.gradient.button[0]} size={28} />
          </KeepReadingContainer>
        )}
      </Content>
    </Container>
  );
}
