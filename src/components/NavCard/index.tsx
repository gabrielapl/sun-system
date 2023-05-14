import { Container, Footer, NavigationIcon, Title } from "./styles";

import Sun from "../../assets/sun.svg";
import { ArrowRight } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function NavCard() {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("spaceEntity")}>
      <Container>
        <Sun />

        <Footer>
          <Title>Sol</Title>
          <NavigationIcon>
            <ArrowRight color={theme.colors.gradient.button[0]} />
          </NavigationIcon>
        </Footer>
      </Container>
    </TouchableOpacity>
  );
}
