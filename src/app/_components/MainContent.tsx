"use client";
import {
  Card,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getPokemonTypeWithColor } from "../../helpers/colorType";
import { Pokemon } from "../../services/api.types";
import { ModalPoke } from "./ModalPoke";

const createQueryString = (params: Record<string, string | number | null>) => {
  const newSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, String(value));
    }
  }

  return newSearchParams.toString();
};

export const Circle = () => {
  return (
    <svg width="500" height="500">
      <defs>
        <mask id="bigmask">
          <rect width="100%" height="100%" fill="red" />
          <circle cx="250" cy="250" r="50" />
        </mask>
        <mask id="smallmask">
          <circle cx="250" cy="250" r="150" fill="red" />
          <circle cx="250" cy="250" r="100" />
        </mask>
      </defs>
      <circle id="donut" cx="250" cy="250" r="200" mask="url(#bigmask)" />
    </svg>
  );
};

type Props = {
  data: Pokemon[];
  total: number;
  offset: number;
  limit: number;
};
export const MainContent = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState<Pokemon | null>();
  const totalPages = Math.ceil(props.total / props.limit);
  const perPage = props.limit;
  const page = Math.floor(props.offset / props.limit) + 1;

  const onClickPerPage = (value: number) => {
    const offset = (page - 1) * value;
    const limit = value;
    const qs = createQueryString({ offset, limit });
    router.push(`${pathname}?${qs}`, { scroll: false });
  };

  const onClickPaginate = (value: number) => {
    const offset = (value - 1) * perPage;
    const limit = perPage;
    const qs = createQueryString({ offset, limit });
    router.push(`${pathname}?${qs}`, { scroll: false });
  };

  const onShowModal = (data: Pokemon) => {
    setOpenModal(true);
    setSelectPokemon(data);
  };

  useEffect(() => {
    if (!openModal) {
      setSelectPokemon(null);
    }
  }, [openModal]);
  return (
    <div className="bg-[#E6AB09] relative overflow-hidden" id="poke-list">
      <ModalPoke
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={selectPokemon}
      />
      <div className="absolute top-[-250px] left-[-250px]">
        <Circle />
      </div>
      <div className="absolute bottom-[-250px] right-[-250px]">
        <Circle />
      </div>
      <div className="px-[140px]">
        {/* title */}
        <div className="text-center mt-[80px]">
          <Typography
            variant="h2"
            component="h2"
            color="#42494D"
            fontWeight="bold"
          >
            PokèDex
          </Typography>
          <div className="mt-[16px]">
            <Typography fontSize={24} color="#42494D">
              All Generation totaling
            </Typography>
            <Typography fontSize={24} color="#42494D">
              {props.total} Pokemon
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-[60px]">
          {props.data.map((item, index) => (
            <Card
              key={index}
              className="cursor-pointer"
              onClick={() => onShowModal(item)}
            >
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <img
                    className="w-full h-[275px] rounded-md"
                    alt="pokemon"
                    src={item.image}
                  />
                  <Typography fontWeight={"bold"} fontSize={20} color="#B3B6B8">
                    #{item.id}
                  </Typography>
                  <Typography fontSize={40} fontWeight={"bold"}>
                    {item.name}
                  </Typography>
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
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-[40px] mb-[80px] flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Typography fontWeight={"bold"} fontSize={20} color="#fff">
              Per Page :
            </Typography>
            <FormControl>
              <InputLabel></InputLabel>
              <Select
                value={perPage}
                label={perPage.toString()}
                onChange={(val) => onClickPerPage(val.target.value as number)}
              >
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={27}>27</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            size="large"
            page={page}
            onChange={(_, newPage) => onClickPaginate(newPage)}
          />
          <div>
            <Typography fontWeight={"bold"} fontSize={20} color="#fff">
              Total Data : {props.total}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
