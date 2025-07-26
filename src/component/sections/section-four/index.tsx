import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionType4({ section }: { section: Section }) {
  return (
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
  );
}
