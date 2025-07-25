import IconSearch from "@/svgIcon/IconSearch";
import Image from "next/image";
import React from "react";
import LangChangeButton from "../lang-change";

export default function Header() {
  return (
    <div className="bg-white flex gap-1 md:py-3 md:px-7 cursor-pointer">
      <Image
        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
        alt="10 Minute School Logo"
        height={80}
        width={80}
      />
      <div className="shadow-0 rounded-b-[23px] flex w-full md:w-[30%] items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border">
        <IconSearch />
        <input type="text" placeholder="" className=" " />
      </div>
      <div className="flex gap-1">
        <LangChangeButton />
        <button className="text-[#1cab55] font-600 cursor-pointer">16911</button>
        <button className="bg-[#1cab55] md:px-3 rounded text-white cursor-pointer">লগ-ইন</button>
      </div>
    </div>
  );
}
