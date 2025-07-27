"use client";
import { RxCross2 } from "react-icons/rx";
import { useRouter, useSearchParams } from "next/navigation";

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
        <RxCross2 color="white" className="w-6 h-6"/>
      </button>
    </div>
  );
}
