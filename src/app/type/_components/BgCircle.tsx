import { Donut } from "@app/app/_components/Circle";
import { getPokemonTypeWithColor } from "@app/helpers/colorType";

export const BgCircle = ({ active }: { active: string }) => {
  return (
    <>
      <div className="absolute top-[300px] right-0 -z-10">
        <Donut
          height={500}
          width={500}
          innerColor={getPokemonTypeWithColor(active).colorHex ?? "#000"}
          outerColor={getPokemonTypeWithColor(active).colorHex ?? "#000"}
          strokeWidth={10}
        />
      </div>
    </>
  );
};
