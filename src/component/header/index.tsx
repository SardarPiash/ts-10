
import Image from "next/image";
import React from "react";
import LangChangeButton from "../lang-change";
import Search from "./Search";

export default function Header() {
  return (
    <div className="bg-white sticky top-0 z-100 flex justify-between gap-1 md:py-3 md:px-7 cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
      <div className="flex w-[50%] h-[40px] md:gap-5">
        <Image
        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
        alt="10 Minute School Logo"
        height={80}
        width={80}
        className="md:w-[100px]"
        />
        <Search />
      </div>
      <div className="flex gap-1 items-center ">
        <LangChangeButton />
        <button className="text-[#1cab55] font-semibold cursor-pointer">16911</button>
        <button className="bg-[#1cab55] md:px-3 rounded text-white cursor-pointer">লগ-ইন</button>
      </div>
    </div>
  );
}
