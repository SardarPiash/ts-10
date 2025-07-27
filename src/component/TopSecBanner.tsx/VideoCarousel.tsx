"use client";
import React, { useState } from "react";
import Carousel from "../carousel/Carousel";
import { SwiperSlide } from "swiper/react";

interface Media {
  thumbnail_url: string;
  resource_value: string;
  resource_type: string;
}

export default function VideoCarousel({ media }: { media: Media[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="">
      <Carousel
        leftButtonPosition="top-1/2 left-0"
        rightButtonPosition="top-1/2 right-0"
        slidesPerView={1}
        activeIndex={activeIndex}
        onSlideChange={(index: number) => setActiveIndex(index)}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.resource_type === "video" ? (
              <div className="w-full aspect-video relative flex items-center justify-center">
                {activeIndex === index ? (
                  <iframe
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={item.thumbnail_url}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full aspect-video relative flex items-center justify-center cursor-default">
                <img
                  src={item.resource_value}
                  alt="Image thumbnail"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Carousel>

      {/* Thumbnails below */}
      <div className="flex gap-2 w-full overflow-x-scroll md:mt-5 hide-scrollbar md:px-3">
        {media.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded overflow-hidden border-2 ${
              activeIndex === index ? "border-blue-500" : "border-transparent"
            }`}
            style={{ width: 100, height: 60, flexShrink: 0 }}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={item.resource_type === "video" ? item.thumbnail_url : item.resource_value}
              alt="Thumbnail"
              className="w-10 md:w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
