interface PokemonType {
  name: string;
  url: string;
  colorHex?: string;
}

const typeColorMap: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  steel: "#B7B7CE",
  unknown: "#68A090",
};

export const getPokemonTypeWithColor = (typeName: string): PokemonType => {
  const colorHex = typeColorMap[typeName] || "#000000";
  return {
    name: typeName,
    url: `https://pokeapi.co/api/v2/type/${typeName}`,
    colorHex,
  };
};
