import {
  ArrowDown,
  ArrowRight,
  CaretDown,
  CaretRight,
} from "phosphor-react-native";
import { AccordingButton, Container, Title } from "./styles";
import { ReactNode, useState } from "react";

interface AccordingProps {
  title: string;
  children: ReactNode;
}

export function Accordion({ children, title }: AccordingProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <AccordingButton onPress={() => setIsActive(!isActive)}>
        {isActive ? (
          <CaretRight size={16} weight="bold" />
        ) : (
          <CaretDown size={16} weight="bold" />
        )}

        <Title>{title}</Title>
      </AccordingButton>

      {isActive && children}
    </Container>
  );
}
