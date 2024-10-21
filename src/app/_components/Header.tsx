import logo from "@app/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-[140px] py-[14px] flex items-center space-x-10">
      <Link href="/">
        <Image alt="logo" src={logo} width={167} height={59} />
      </Link>
      <Link href="/">
        <span className="text-[#E6AB09] font-bold">Home</span>
      </Link>
      <Link href="/type">
        <span className="text-[#42494D]">Pokemon Type</span>
      </Link>
    </div>
  );
};
