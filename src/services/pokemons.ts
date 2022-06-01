import { gql } from "@apollo/client";

export interface ListPokemonResponse {
  pokemons: {
    results: {
      id: number;
      name: string;
      image: string;
      __typename: string;
    }[];
  };
}

export const listPokemons = gql`
  query ListPokemons($limit: Int) {
    pokemons(limit: $limit) {
      results {
        id
        name
        image
      }
    }
  }
`;
