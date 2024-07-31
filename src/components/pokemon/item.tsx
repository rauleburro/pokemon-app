import { Pokemon } from "@/models/pokemon";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Image from "next/image";

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
        height="100"
      />
      <CardHeader title={pokemon.name} />
    </Card>
  );
};

export default PokemonItem;
