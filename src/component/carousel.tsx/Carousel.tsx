"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps {
  children: React.ReactNode;
  slidesPerView: number;
  leftButtonPosition: string;
  rightButtonPosition: string;
  activeIndex?: number;
  onSlideChange?: (index: number) => void;
  isFromVideoCarousel?:boolean;
}

export default function Carousel({
  children,
  slidesPerView,
  leftButtonPosition,
  rightButtonPosition,
  activeIndex,
  onSlideChange,
}: CarouselProps) {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperInstance = useRef<any>(null);

  useEffect(() => {
    if (swiperInstance.current) {
      swiperInstance.current.slideTo(activeIndex); 
    }
  }, [activeIndex]);

  return (
    <div className="relative">
      <div
        ref={prevRef}
        className={`bg-black absolute z-50 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors duration-300 ${leftButtonPosition} ${
          isBeginning ? " opacity-20" : " opacity-55"
        }`}
      >
        <ChevronLeft className="text-white w-4 h-4" />
      </div>

      <div
        ref={nextRef}
        className={`bg-black absolute z-50 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors duration-300 ${rightButtonPosition} ${
          isEnd ? " opacity-20" : " opacity-55"
        }`}
      >
        <ChevronRight className="text-white w-4 h-4" />
      </div>

      <Swiper
        ref={swiperInstance} 
        modules={[Navigation]}
        onSwiper={(swiper) => {
          // @ts-ignore
          swiperInstance.current = swiper; 
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          const currentIndex = swiper.activeIndex;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          if(onSlideChange){
              onSlideChange(currentIndex);
          }
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={slidesPerView}
        spaceBetween={2}
        className="w-full"
        initialSlide={activeIndex} 
      >
        {children}
      </Swiper>
    </div>
  );
}
