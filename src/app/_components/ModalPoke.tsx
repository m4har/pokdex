import {
  Box,
  Button,
  ButtonProps,
  Chip,
  Modal,
  Typography,
} from "@mui/material";
import { purple, yellow } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { getPokemonTypeWithColor } from "../../helpers/colorType";
import { Pokemon } from "../../services/api.types";
type Props = {
  open: boolean;
  onClose: () => void;
  data?: Pokemon | null;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  borderRadius: "10px",
  bgcolor: "background.paper",
  display: "flex",
  boxShadow: 24,
  width: "80%",
  p: 4,
};

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

export const ModalPoke = (props: Props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          src={props.data?.image}
          alt={props.data?.name}
          className="w-[400px] h-[400px]"
        />
        <div className="w-full">
          <Typography fontWeight={"bold"} fontSize={40}>
            {props.data?.name}
          </Typography>
          <div className="grid grid-rows-3 gap-6">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span>Weight: {props.data?.weight}</span>
              </div>
              <div className="text-lefts">
                <span>Height: {props.data?.height}</span>
              </div>
            </div>
            <div className="flex space-x-7">
              <span>Abilities: </span>
              <div>
                <ul className="list-disc">
                  {props.data?.abilities.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex space-x-4">
              <span>Types: </span>
              <div className="flex space-x-3">
                {props.data?.types.map((i) => (
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
            <Link href={`/detail/${props.data?.name}`}>
              <ColorButton>More Details</ColorButton>
            </Link>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
