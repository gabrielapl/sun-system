import { Container } from "./styles";

import backgroundStar from "../../assets/Stars.png";
import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <Container source={backgroundStar} resizeMode="cover">
      {children}
    </Container>
  );
}
