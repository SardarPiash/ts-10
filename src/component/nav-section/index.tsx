"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Check } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import ContentPreview from "../content-preview";
import StudentTalk from "../student-talk";

export default function DownNavSection({
  courseData,
}: {
  courseData: CourseData;
}) {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className=" md:mt-4 w-[58%] md:pl-[26px] relative">
      {/* Custom navigation buttons using Lucide icons */}
      <div
        ref={prevRef}
        className="absolute z-10 left-2 top-3 -translate-y-1/2 cursor-pointer bg-black opacity-55 rounded-full p-2"
      >
        <ChevronLeft className="text-white w-4 h-4 " />
      </div>
      <div
        ref={nextRef}
        className="absolute z-10 right-2 top-3 -translate-y-1/2 cursor-pointer bg-black opacity-55 rounded-full p-2"
      >
        <ChevronRight className="text-white w-4 h-4" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        slidesPerView={4.2}
        spaceBetween={2}
        className="w-full"
      >
        {courseData.sections
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
      </Swiper>

      <div className="mt-4">
        {courseData.sections?.map((section, index) => (
          <div key={index}>
            <p className="md:text-[24px] md:mb-4">{section.name}</p>
            {index === 2 && (
              <div
                id={section.type}
                className="border p-5 flex flex-row items-center rounded-md"
              >
                <div>
                  {section.values[0]?.image && (
                    <Image
                      src={section.values[0].image}
                      alt="image"
                      height={40}
                      width={50}
                      className="rounded-full md:w-[73px] md:h-[73px]"
                    />
                  )}
                </div>
                <div className="flex flex-col md:ml-4 text-black">
                  <Link
                    href="#munzarin-shohid"
                    className="text-[18px] cursor-hover hover:text-green-500"
                  >
                    {section.values[0].name}
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.values[0].description || "",
                    }}
                    className="text-[14px]"
                  />
                </div>
              </div>
            )}
            {index === 3 && (
              <div
                id={section.type}
                className="bg-[#111827] text-white md:p-6 rounded-md"
              >
                {section.values && section.values.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    {section.values.map((data, inx) => (
                      <div key={inx} className="flex items-start gap-3">
                        {data.icon && (
                          <Image
                            src={data.icon}
                            alt="icon"
                            width={40}
                            height={40}
                            className="md:w-10 md:h-10 w-8 h-8"
                          />
                        )}
                        <div>
                          <p className="text-[18px] font-medium">
                            {data.title}
                          </p>
                          <p className="text-[14px] font-normal">
                            {data.subtitle}
                          </p>
                          {data.text && (
                            <span className="text-sm">{data.text}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {index === 4 && (
              <div
                id={section.type}
                className="description-container-bg text-white md:p-6 rounded-md"
              >
                {section.values &&
                  section.values.length > 0 &&
                  section.values.map((data, inx) => (
                    <div key={inx} className="flex justify-between">
                      <div className="">
                        {data.top_left_icon_img && (
                          <Image
                            src={data.top_left_icon_img}
                            height={50}
                            width={50}
                            alt="icon"
                            className="md:w-[180px] md:h-[40px]"
                          />
                        )}
                        <p className="font-semibold text-[20px] mt-4 w-[50%]">
                          {data.title}
                        </p>
                        <p className="text-[16px]">{data.description}</p>
                        <div className="mt-5">
                          <Link
                            href={data.cta?.clicked_url || ""}
                            className="mt-6 bg-green-500 text-[16px] md:px-7 md:py-2 rounded-md border-b-4 border-b-green-800"
                          >
                            {data.cta?.text}
                          </Link>
                        </div>
                      </div>
                      <div>
                        {data.thumbnail && (
                          <Image
                            src={data.thumbnail}
                            height={100}
                            width={100}
                            alt="thumbnil"
                            className="md:w-[320px] md:h-[180px]"
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {index === 5 && (
              <div
                id={section.type}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex flex-col flex-1 gap-4">
                  {section.values.map(
                    (data, inx) =>
                      inx < 3 && (
                        <div key={inx} className="flex items-start gap-2">
                          <Check className="text-sky-500 w-7 h-7 mt-1" />
                          <p className="text-[16px]">{data.text}</p>
                        </div>
                      )
                  )}
                </div>

                <div className="flex flex-col flex-1 gap-4">
                  {section.values.map(
                    (data, inx) =>
                      inx >= 3 && (
                        <div key={inx} className="flex items-start gap-2">
                          <Check className="text-sky-500 w-7 h-7 mt-1" />
                          <p className="text-[16px]">{data.text}</p>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}

            {index === 7 && (
              <div id={section.type}>
                <ContentPreview data={section.values} />
              </div>
            )}

            {index === 8 && (
              <div id={section.type} className="border rounded-md md:px-5 md:py-5">
                {section.values.map((data, inx) => (
                  <div key={inx} className="md:py-0">
                    <h2 className="text-base font-semibold md:my-3 text-[16px]">{data.title}</h2>
                    <div className="flex justify-between items-center">
                      <div>
                        {data?.checklist?.map((ele, i) => (
                          <p className="pt-1  md:mb-3 text-[16px] text-[#4B5563]" key={i}>{ele}</p>
                        ))}
                      </div>
                      <div className="bg-red-400">
                        {data.file_url && (
                          <Image
                            src={data.file_url}
                            height={100}
                            width={100}
                            alt="image"
                            className=" md:w-[160px] object-cover"
                          />
                        )}
                      </div>
                    </div>
                    {
                      inx === 0 && (
                        <div className="border-t md:mt-5">

                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
            )}

            {
              index === 9 && (
                <div id={section.type} className="relative w-full overflow-hidden bg-no-repeat bg-cover  rounded-lg bg-[url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)]">
                  <div className="text-white py-5 px-5">
                    <div className="border-4 border-white/30 rounded-md md:px-[40px] md:py-5">
                      <p className="text-xl font-600 md:mb-2">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</p>
                      <ul>
                        <li className="flex items-center gap-1.5">
                          <span className="text-xl leading-none">•</span>
                          <p>360 পৃষ্ঠা</p>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-xl leading-none">•</span><p>প্রিমিয়াম হার্ডকপি</p></li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-xl leading-none">•</span><p>ফ্রি ডেলিভারি</p></li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-xl leading-none">•</span><p>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</p></li>
                      </ul>

                    </div>

                  </div>
                </div>
              )
            }

            {
              index === 12 && (
                <div id={section.type}>
                  <StudentTalk data={section.values} />


                </div>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}
