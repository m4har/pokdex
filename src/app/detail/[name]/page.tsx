import { Header, LangSwitch } from "@app/app/_components";
import { getPokemonDetail } from "@app/services/api";
import { OtherImage, PokemonName } from "./_components";

const PokemonDetail = async ({
  params,
}: {
  params: { [key: string]: string };
}) => {
  const pokemon = await getPokemonDetail(params.name);
  return (
    <div>
      <LangSwitch />
      <Header />
      <PokemonName
        abilities={pokemon?.abilities ?? []}
        height={pokemon?.height ?? 0}
        image={pokemon?.sprites.front_default ?? ""}
        name={pokemon?.name ?? ""}
        types={pokemon?.types ?? []}
        weight={pokemon?.weight ?? 0}
      />
      <OtherImage sprites={pokemon?.sprites} />
    </div>
  );
};

export default PokemonDetail;
