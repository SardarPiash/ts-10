import TopBanner from "@/component/top-banner";
import { getLandingPageData } from "../../api/apidata";
import Header from "../../component/header";
import Description from "@/component/description";
import Image from "next/image";
import TopSecBanner from "@/component/TopSecBanner.tsx";
import SliderNav from "@/component/slider-nav";

export default async function Homepage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; banner?: string }>;
}) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "bn";
  const isTopBannnerVisible = params.banner !== "false";
  const apiData = await getLandingPageData({ lang });
  return (
    <>
      <Header />
      <TopBanner isTopBannnerVisible={isTopBannnerVisible} />
      <TopSecBanner courseData={apiData} />
      <div className="sticky w-[58%] md:top-[66px] bg-white mt-2 z-10 py-5">
        <div className=" md:pl-[26px]">
          <SliderNav navSectionData={apiData.data.sections} />
        </div>
      </div>

      <Description courseData={apiData} />
      <div className="my-5 border-t flex justify-around items-center">
        <Image
          src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
          alt="10 Minute School Logo"
          height={80}
          width={80}
        />
        <p> স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত </p>
      </div>
    </>
  );
}
