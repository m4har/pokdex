import axios from "axios";
import { getPokemonTypeWithColor } from "../helpers/colorType";
import {
  PokemonData,
  PokemonListResponse,
  PokemonTypeListResponse,
  PokemonTypeResponse,
} from "./api.types";

const baseURL = "https://pokeapi.co/api/v2/";
const pokeapi = axios.create({
  baseURL,
});

export const getPokemonList = async (offset: number, limit: number) => {
  const response = await pokeapi.get<PokemonListResponse>("pokemon", {
    params: { limit, offset },
  });
  const pokemonList = response.data.results;

  const pokemonDetails = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const details = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        url: pokemon.url,
        id: details.data.id,
        height: details.data.height,
        weight: details.data.weight,
        abilities: details.data.abilities.map(
          (ability: any) => ability.ability.name
        ),
        image: details.data.sprites.front_default as string,
        types: details.data.types.map(
          (type: any) => type.type.name
        ) as string[],
      };
    })
  );

  return { count: response.data.count, data: pokemonDetails };
};

export const getPokemonDetail = async (name: string) => {
  try {
    const response = await pokeapi.get(`pokemon/${name}`);
    const evolutionResponse = await axios.get(response.data.species.url);
    const reorderedData: PokemonData = {
      name: response.data.name,
      weight: response.data.weight,
      height: response.data.height,
      abilities: response.data.abilities.map((ability: any) => ({
        ability: {
          name: ability.ability.name,
          url: ability.ability.url,
        },
      })),
      types: response.data.types.map((type: any) => ({
        type: {
          name: type.type.name,
          url: type.type.url,
        },
      })),
      sprites: {
        front_default: response.data.sprites.front_default,
        back_default: response.data.sprites.back_default,
        front_shiny: response.data.sprites.front_shiny,
        back_shiny: response.data.sprites.back_shiny,
      },
      stats: response.data.stats.map((stat: any) => ({
        base_stat: stat.base_stat,
        stat: {
          name: stat.stat.name,
          url: stat.stat.url,
        },
      })),
      evolution_chain: evolutionResponse.data.evolution_chain.url,
    };

    return reorderedData;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
};

export const getTypeAttribute = async () => {
  const response = await pokeapi.get<PokemonTypeResponse>("type");
  const withColor = response.data.results.map((r) =>
    getPokemonTypeWithColor(r.name)
  );

  return withColor;
};

export const getPokemonByTypeList = async (type: string) => {
  const response = await pokeapi.get<PokemonTypeListResponse>(`type/${type}`);
  const pokemonList = response.data.pokemon;
  const pokemonDetails = await Promise.all(
    pokemonList.map(async ({ pokemon }) => {
      const details = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        url: pokemon.url,
        id: details.data.id,
        height: details.data.height,
        weight: details.data.weight,
        abilities: details.data.abilities.map(
          (ability: any) => ability.ability.name
        ),
        image: details.data.sprites.front_default as string,
        types: details.data.types.map(
          (type: any) => type.type.name
        ) as string[],
      };
    })
  );

  return { count: response.data.pokemon.length, data: pokemonDetails };
};
