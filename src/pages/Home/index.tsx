import { Background } from "../../components/Background";
import { CategoryCard } from "../../components/CategoryCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Title, ScrollWrapper } from "./styles";

import Planets from "../../assets/icons/Planets.svg";
import Asteroids from "../../assets/icons/Asteroids.svg";
import Galaxies from "../../assets/icons/Galaxies.svg";
import Stars from "../../assets/icons/Stars.svg";
import { NavCard } from "../../components/NavCard";
import { useState } from "react";

const categories: {
  id: number;
  name: string;
  icon: any;
  color: "blue" | "pink" | "cyan" | "yellow";
}[] = [
  { id: 1, name: "Planetas", icon: Planets, color: "blue" },
  { id: 2, name: "Galáxias", icon: Galaxies, color: "yellow" },
  { id: 3, name: "Estrelas", icon: Stars, color: "cyan" },
  { id: 4, name: "Asteroides", icon: Asteroids, color: "pink" },
];

export function Home() {
  const [isActiveId, setIsActiveId] = useState(1);

  return (
    <Background>
      <Container>
        <Header />

        <Input />

        <Title>Categorias</Title>
        <ScrollWrapper showsHorizontalScrollIndicator={false} horizontal>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              name={category.name}
              color={category.color}
              isActive={category.id === isActiveId}
              onClick={() => setIsActiveId(category.id)}
            />
          ))}
        </ScrollWrapper>

        <Title>Sistema Solar</Title>
        <ScrollWrapper showsHorizontalScrollIndicator={false} horizontal>
          <NavCard />
          <NavCard />
          <NavCard />
        </ScrollWrapper>
      </Container>
    </Background>
  );
}
