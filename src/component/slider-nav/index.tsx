"use client";

import Link from 'next/link';
import { SwiperSlide } from "swiper/react";
import Carousel from '../carousel/Carousel';

export default function SliderNav({ navSectionData }: { navSectionData: Section[] }) {

     if (!navSectionData || navSectionData.length === 0) return null;
  return (
    <div>
      <Carousel leftButtonPosition="left-2 top-3" rightButtonPosition="right-2 top-3" slidesPerView={4.2}>
        <>
          {navSectionData
            .filter((section) => section.name !== "")
            .map((section, index) => (
              <SwiperSlide
                key={index}
                className="w-auto bg-transparent rounded-lg text-[16px] text-black text-center"
              >
                <Link prefetch={true} href={`#${section.type}`}>
                  {section.name}
                </Link>
              </SwiperSlide>
            ))}
        </>
      </Carousel>
    </div>
  );
}
