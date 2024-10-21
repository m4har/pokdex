"use client";
import pokegroup from "@app/assets/img/group_home.png";
import { Button, ButtonProps, Typography } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  borderRadius: "10px",
  fontWeight: "bold",
  padding: "13px 40px",
  backgroundColor: yellow[800],
  "&:hover": {
    backgroundColor: yellow[900],
  },
}));

const handleFocusElement = () => {
  const element = document.getElementById("poke-list");
  element?.scrollIntoView({ behavior: "smooth" });
};
export const Banner = () => {
  return (
    <div className="px-[140px] h-[880px] flex items-center">
      <div className="flex w-full justify-between items-center">
        <div className="w-[534px] flex flex-col space-y-5">
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {`All the Pokémon data you'll ever need in one place!`}
          </Typography>
          <Typography variant="body1">
            Thousands of data compiled into one place
          </Typography>
          <div>
            <ColorButton
              className="font-bold text-lg"
              onClick={handleFocusElement}
            >
              Check PokèDex
            </ColorButton>
          </div>
        </div>
        <Image alt="pokemon-group" src={pokegroup} width={534} height={631} />
      </div>
    </div>
  );
};
