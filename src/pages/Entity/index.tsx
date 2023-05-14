import backgroundStar from "../../assets/Stars.png";
import {
  About,
  Container,
  Content,
  Header,
  Heading,
  IconWrapper,
  Separator,
  SocialWrapper,
  Title,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { FavoriteButton } from "../../components/FavoriteButton";
import Mars from "../../assets/mars.svg";
import { Accordion } from "../../components/Accordion";

export function Entity() {
  return (
    <Container>
      <Header source={backgroundStar} resizeMode="cover">
        <BackButton />
        <IconWrapper>
          <Mars width={300} height={300} />
        </IconWrapper>
      </Header>
      <Content>
        <Heading>
          <Title>Marte</Title>
          <SocialWrapper>
            <FavoriteButton isNotFavoriteColor="brand_background" />
          </SocialWrapper>
        </Heading>

        <About>
          Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
          Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é
          descrito como o "Planeta Vermelho", porque o óxido de ferro
          predominante em sua superfície lhe dá uma aparência avermelhada.
        </About>

        <Accordion title="Introdução">
          <About>
            Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
            Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes
            é descrito como o "Planeta Vermelho", porque o óxido de ferro
            predominante em sua superfície lhe dá uma aparência avermelhada.
          </About>
        </Accordion>
        <Separator />
        <Accordion title="Características Físicas">
          <About>
            Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
            Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes
            é descrito como o "Planeta Vermelho", porque o óxido de ferro
            predominante em sua superfície lhe dá uma aparência avermelhada.
          </About>
        </Accordion>
        <Separator />
        <Accordion title="Hidrologia">
          <About>
            Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
            Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes
            é descrito como o "Planeta Vermelho", porque o óxido de ferro
            predominante em sua superfície lhe dá uma aparência avermelhada.
          </About>
        </Accordion>
        <Separator />
        <Accordion title="Geografia">
          <About>
            Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
            Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes
            é descrito como o "Planeta Vermelho", porque o óxido de ferro
            predominante em sua superfície lhe dá uma aparência avermelhada.
          </About>
        </Accordion>
      </Content>
    </Container>
  );
}
