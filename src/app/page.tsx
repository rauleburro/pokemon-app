import PokemonsList from "@/components/pokemon/list";
import { getClient } from "@/graphql/ApolloClient";
import { GET_POKEMONS } from "@/graphql/graphql";
import { AppBar, Box, Container, Typography } from "@mui/material";

export default async function Home() {
  const { loading, error, data } = await getClient().query({
    query: GET_POKEMONS,
    variables: { first: 151 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <AppBar position="static">
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            m: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          POKEMON LIST
        </Typography>
      </AppBar>
      <PokemonsList pokemons={data.pokemons} />;
    </>
  );
}
