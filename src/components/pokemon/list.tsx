"use client";
import PokemonItem from "./item";
import { Container, Grid, TextField } from "@mui/material";
import React from "react";

interface PokemonsListProps {
  pokemons: {
    id: string;
    name: string;
    image: string;
  }[];
}

const PokemonsList: React.FC<PokemonsListProps> = ({ pokemons }) => {
  const [filteredPokemons, setFilteredPokemons] = React.useState(pokemons);
  return (
    <Container
      sx={{
        mt: 4,
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          setFilteredPokemons(
            pokemons.filter((pokemon: any) =>
              pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {filteredPokemons.map((pokemon: any) => (
          <Grid item xs={4} key={pokemon.id}>
            <PokemonItem pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonsList;
