import TopBanner from "@/component/top-banner";
import Header from "@/component/header";
import Description from "@/component/description";
import SliderNav from "@/component/slider-nav";
import MobileCourseDetails from "@/component/course-details-mobile/MobileCourseDetails";
import Image from "next/image";
import TopSecBanner from "@/component/TopSecBanner";

interface Props {
  searchParams: { lang?: "en" | "bn"; banner?: string };
  courseData: ApiResponse;
  isTopBannnerVisible: boolean;
}

export default function Homepage({
  courseData,
  isTopBannnerVisible,
}: Props) {
  return (
    <>
      <Header />
      <TopBanner isTopBannnerVisible={isTopBannnerVisible} />
      <TopSecBanner courseData={courseData} />
      <MobileCourseDetails courseData={courseData} />
      <div className="body-container">
        <div className="hidden md:block">
          <SliderNav navSectionData={courseData.data.sections} />
        </div>
        <Description courseData={courseData} />
      </div>
      <div className="my-10 border-t border-[#dbe1eb] flex justify-around items-center">
        <div className="mt-5 flex flex-col md:flex-row items-center gap-3">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="10 Minute School Logo"
            height={80}
            width={80}
          />
          <p className="text-[14px]">
            স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </>
  );
}
