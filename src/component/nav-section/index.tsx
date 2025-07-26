"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

import ContentPreview from "../content-preview";
import FAQ from "../faq";
import StudentTalk from "../student-talk";

import SectionType2 from "../sections/section-one";
import SectionType3 from "../sections/section-two";
import SectionType4 from "../sections/section-four";
import SectionType5 from "../sections/section-five";
import SectionType7 from "../sections/section-seven";
import SectionType8 from "../sections/section-eight";
import SectionType9 from "../sections/section-nine";
import SectionType12 from "../sections/section-twelve";
import SectionType13 from "../sections/section-thirteen";
import SectionType14 from "../sections/section-fourteen";
import SectionType15 from "../sections/section-fifteen";

const sectionComponentMap: Record<number, React.ComponentType<{ section: Section }>> = {
  2: SectionType2,
  3: SectionType3,
  4: SectionType4,
  5: SectionType5,
  7: SectionType7,
  8: SectionType8,
  9: SectionType9,
  12: SectionType12,
  13: SectionType13,
  14: SectionType14,
  15: SectionType15,
};

export default function DownNavSection({
  courseData,
}: {
  courseData: CourseData;
}) {
  return (
    <div className="md:mt-4 w-[58%] md:pl-[26px] relative">
      <div className="mt-4">
        {courseData.sections?.map((section, index) => {
          if ([10, 11].includes(index)) return null;

          const SectionComponent = sectionComponentMap[index];

          return (
            <div key={index}>
              <p className="md:text-[24px] md:mb-4">{section.name}</p>
              {SectionComponent && <SectionComponent section={section} />}
            </div>
          );
        })}

      </div>
    </div>
  );
}
