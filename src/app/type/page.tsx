import { getPokemonByTypeList, getTypeAttribute } from "../../services/api";
import { Header, LangSwitch } from "../_components";
import { AttributeType, BgCircle, PokemonList } from "./_components";

const TypePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const attributeData = await getTypeAttribute();
  const active = searchParams.select ?? attributeData[0].name;
  const pokemonList = await getPokemonByTypeList(active);
  return (
    <div className="min-h-screen relative">
      <div className="z-20">
        <LangSwitch />
        <Header />
        <div className="flex ml-[140px] mt-[180px]">
          <AttributeType data={attributeData} active={active} />
          <PokemonList
            active={active}
            data={pokemonList.data ?? []}
            total={pokemonList.count ?? 0}
          />
        </div>
      </div>
      <BgCircle active={active} />
    </div>
  );
};

export default TypePage;
