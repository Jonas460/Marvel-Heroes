import React from "react";
import {
  Container,
  HeroCard,
  HeroImage,
  HeroName,
  HeroDescription,
} from "./HeroList.styles";

interface HeroListProps {
  heroes: {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
  }[];
  onSelect: (id: number) => void;
}

const HeroList: React.FC<HeroListProps> = ({ heroes, onSelect }) => {
  return (
    <Container>
      {heroes.map((hero) => (
        <HeroCard key={hero.id}>
          <HeroImage src={hero.thumbnail} alt={hero.name} />
          <HeroName>{hero.name}</HeroName>
          <HeroDescription>{hero.description}</HeroDescription>
        </HeroCard>
      ))}
    </Container>
  );
};

export default HeroList;
