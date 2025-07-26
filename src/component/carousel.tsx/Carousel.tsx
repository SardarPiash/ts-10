"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps {
    children: React.ReactNode;
    slidesPerView: number;
    leftButtonPosition: string;
    rightButtonPosition: string;
}

export default function Carousel({
    children,
    slidesPerView,
    leftButtonPosition,
    rightButtonPosition
}: CarouselProps) {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className="relative">
            {/* Left Button */}
            <div
                ref={prevRef}
                className={`bg-black absolute z-50 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors duration-300 ${leftButtonPosition} ${
                    isBeginning ? " opacity-20" : " opacity-55"
                }`}
            >
                <ChevronLeft className="text-white w-4 h-4" />
            </div>

            {/* Right Button */}
            <div
                ref={nextRef}
                className={`bg-black absolute z-50 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors duration-300 ${rightButtonPosition} ${
                    isEnd ? " opacity-20" : " opacity-55"
                }`}
            >
                <ChevronRight className="text-white w-4 h-4" />
            </div>

            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
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
            >
                {children}
            </Swiper>
        </div>
    );
}
