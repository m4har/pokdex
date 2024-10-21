export interface Pokemon {
  name: string;
  image: string;
  url: string;
  types: string[];
  id?: number;
  weight: number;
  height: number;
  abilities: string[];
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}

export interface PokemonEvolution {
  evolution_chain: {
    url: string;
  };
}

export interface PokemonData {
  name: string;
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  evolution_chain: string;
}

export type PokemonTypeResponse = {
  results: { name: string; url: string }[];
};
export type PokemonTypeListResponse = {
  pokemon: { pokemon: { name: string; url: string } }[];
};
