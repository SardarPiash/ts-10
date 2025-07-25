"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams ,useRouter} from "next/navigation";

export default function TopBannerCloseButton() {
    const router = useRouter();
    const searchParam = useSearchParams();

    function handleCloseBanner(){
        const params = new URLSearchParams(searchParam.toString());

        params.set("banner","false");

        router.push(`?${params.toString()}`);

    }
  return (
    <div>
      <button className=" bg-transparent cursor-pointer" onClick={(e)=>{handleCloseBanner()}}>
        <Image
          src="/icon/cross-Icon.png"
          alt="close icon"
          width={32}
          height={32}
          className="md:w-6 md:h-6"
        />
      </button>
    </div>
  );
}
