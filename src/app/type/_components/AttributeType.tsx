"use client";
import { createQueryString } from "@app/helpers/qs";
import { Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  data: { name: string; colorHex?: string; url: string }[];
  active: string;
};

export const AttributeType = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const onChangeTypeList = (select: string) => {
    const qs = createQueryString({ select });
    router.push(`${pathname}?${qs}`, { scroll: false });
  };
  return (
    <div className="pr-[57px] border-r-2 border-[#E6E6E6]">
      <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
        Pokemon Type
      </Typography>
      <ul className="list-disc ml-8 flex flex-col space-y-1">
        {props.data.map((item) => (
          <li
            key={item.name}
            onClick={() => onChangeTypeList(item.name)}
            className="cursor-pointer"
            style={{
              color: item.name == props.active ? item.colorHex : "#7B8082",
              fontWeight: item.name == props.active ? "bold" : "normal",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
