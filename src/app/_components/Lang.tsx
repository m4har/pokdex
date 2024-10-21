import { ExpandMore, Language } from "@mui/icons-material";

export const LangSwitch = () => {
  return (
    <div className="px-[140px] py-2 w-full justify-end flex">
      <div className="text-[#B3B6B8] text-sm flex space-x-1 items-center">
        <Language />
        <span>English</span>
        <ExpandMore />
      </div>
    </div>
  );
};
