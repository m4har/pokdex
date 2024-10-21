import { getPokemonTypeWithColor } from "@app/helpers/colorType";
import { PokemonAbility, PokemonType } from "@app/services/api.types";
import { Chip, Typography } from "@mui/material";

type Props = {
  name: string;
  image: string;
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
};

export const PokemonName = (props: Props) => {
  return (
    <div className="flex mt-[80px] px-[140px] space-x-4">
      <img
        src={props?.image}
        alt={props?.name}
        className="w-[400px] h-[400px]"
      />
      <div className="w-full">
        <Typography fontWeight={"bold"} fontSize={40}>
          {props?.name}
        </Typography>
        <div className="grid grid-rows-3 gap-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span>Weight: {props.weight}</span>
            </div>
            <div className="text-lefts">
              <span>Height: {props.height}</span>
            </div>
          </div>
          <div className="flex space-x-7">
            <span>Abilities: </span>
            <div>
              <ul className="list-disc">
                {props?.abilities.map((i) => (
                  <li key={i.ability.name}>{i.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex space-x-4">
            <span>Types: </span>
            <div className="flex space-x-3">
              {props.types.map((i) => (
                <Chip
                  key={i.type.name}
                  label={i.type.name}
                  sx={{
                    backgroundColor: getPokemonTypeWithColor(i.type.name)
                      .colorHex,
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                />
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
