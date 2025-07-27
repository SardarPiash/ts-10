"use client";

import Link from 'next/link';
import { SwiperSlide } from "swiper/react";
import Carousel from '../carousel/Carousel';

export default function SliderNav({ navSectionData }: { navSectionData: Section[] }) {

     if (!navSectionData || navSectionData.length === 0) return null;
  return (
    <div className="sticky w-[60%] md:top-[66px] md:pl-[26px] bg-white mt-2 z-10  ">
      <div className="border-b border-[#dbe1eb] py-5">
        <Carousel leftButtonPosition="left-2 top-3" rightButtonPosition="right-2 top-3" slidesPerView={3.5}>
        <>
          {navSectionData
            .filter((section) => section.name !== "")
            .map((section, index) => (
              <SwiperSlide
                key={index}
                className="w-auto bg-transparent rounded-lg text-[16px] text-gray-600 text-center text-wrap"
              >
                <Link prefetch={true} href={`#${section.type}`}>
                  {section.name}
                </Link>
              </SwiperSlide>
            ))}
        </>
      </Carousel>
      </div>
    </div>
  );
}
