import { Container, Name } from "./styles";

import Planet from "../../assets/icons/Planets.svg";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";

interface NavCardProps {
  name: string;
  icon: any;
  color: "blue" | "pink" | "cyan" | "yellow";
  isActive: boolean;
  onClick: () => void;
}

export function CategoryCard({
  icon: Icon,
  name,
  color,
  isActive = false,
  onClick,
}: NavCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity style={{ opacity: isActive ? 1 : 0.5 }} onPress={onClick}>
      <Container colors={theme.colors.gradient[color]}>
        <Icon />
        <Name>{name}</Name>
      </Container>
    </TouchableOpacity>
  );
}
