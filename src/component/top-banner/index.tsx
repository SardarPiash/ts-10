import Image from "next/image";
import React from "react";
import TopBannerCloseButton from "./TopBannerCloseButton";

export default function TopBanner({
  isTopBannnerVisible,
}: {
  isTopBannnerVisible: boolean;
}) {
    if(!isTopBannnerVisible){
        return null;
    }
  return (
    <div className="w-full relative">
      <Image
        src="https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800&h=150"
        alt="top-banner"
        width={1800}
        height={150}
        className="w-full h-auto object-cover"
        priority
      />
      <div className=" absolute top-0 right-0">
        <TopBannerCloseButton />
      </div>
    </div>
  );
}
