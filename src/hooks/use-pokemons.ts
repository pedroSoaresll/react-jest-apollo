import { useQuery } from "@apollo/client";
import { ListPokemonResponse, listPokemons } from "../services";

interface UsePokemonsParams {
  limit?: number;
}

export function usePokemons({ limit = 10 }: UsePokemonsParams = {}) {
  return useQuery<ListPokemonResponse>(listPokemons, { variables: { limit } });
}
