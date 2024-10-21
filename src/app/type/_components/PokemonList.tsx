"use client";
import { getPokemonTypeWithColor } from "@app/helpers/colorType";
import { Pokemon } from "@app/services/api.types";
import { Card, Chip } from "@mui/material";

type Props = {
  data: Pokemon[];
  active: string;
  total: number;
};
export const PokemonList = (props: Props) => {
  return (
    <div className="pl-[57px] w-full mr-[140px]">
      <p className="font-bold text-3xl">Pokemon With Type {props.active}</p>
      <Card sx={{ backgroundColor: "rgba(255,255,255,0.5)", p: 2 }}>
        {props.data.map((item) => (
          <div key={item.id} className="flex border-b-2 py-4">
            <div className="pr-[24px] border-r-2">
              <img src={item.image} alt={item.name} height={100} width={100} />
            </div>
            <div className="border-r-2 flex justify-center items-center px-[24px]">
              <span className="font-bold text-xl">#{item.id}</span>
            </div>
            <div className="border-r-2 flex justify-center items-center px-[24px]">
              <span className="font-bold text-xl">{item.name}</span>
            </div>
            <div className="flex justify-center items-center px-[24px]">
              <div className="grid grid-cols-2 gap-5">
                {item.types.map((i) => (
                  <Chip
                    key={i}
                    label={i}
                    sx={{
                      backgroundColor: getPokemonTypeWithColor(i).colorHex,
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* paginate */}
        {/* <div className="mt-[40px] mb-[80px] flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Typography fontWeight={"bold"} fontSize={20} color="#000">
              Per Page :
            </Typography>
            <FormControl>
              <InputLabel></InputLabel>
              <Select value={9} label={"9"} onChange={(val) => {}}>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={27}>27</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            size="large"
            page={2}
            onChange={(_, newPage) => {}}
          />
          <div>
            <Typography fontWeight={"bold"} fontSize={20} color="#000">
              Total Data : 999
            </Typography>
          </div>
        </div> */}
      </Card>
    </div>
  );
};
