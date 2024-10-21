import { PokemonSprites } from "@app/services/api.types";

type Props = {
  sprites?: PokemonSprites;
};
export const OtherImage = (props: Props) => {
  return (
    <div className="px-[140px]">
      <p className="font-bold text-lg">Other Image : </p>
      <div className="flex space-x-4">
        <img
          className="w-[170px] h-[170px] border-2"
          src={props?.sprites?.front_default}
          alt="fd"
        />
        <img
          className="w-[170px] h-[170px] border-2"
          src={props?.sprites?.front_shiny}
          alt="fs"
        />
        <img
          className="w-[170px] h-[170px] border-2"
          src={props?.sprites?.back_default}
          alt="bd"
        />
        <img
          className="w-[170px] h-[170px] border-2"
          src={props?.sprites?.back_shiny}
          alt="bs"
        />
      </div>
    </div>
  );
};
