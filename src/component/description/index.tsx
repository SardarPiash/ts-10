import React from "react";
import StarRating from "../ratting";
import Image from "next/image";
import DownNavSection from "../nav-section";

export default function Description({
  courseData,
}: {
  courseData: ApiResponse;
}) {
  return (
    <div>
      <div className="description-container-bg md:px-4 md:py-10 relative">
        <div className="text-white w-[60%] flex flex-col justify-start items-start">
          <h1 className="md:text-[36px] font-bold">{courseData.data.title}</h1>
          <div className="flex items-center gap-1.5 text-base">
            <StarRating rating={3.5} />
            <p>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
          </div>
          <div
            className="mt-2 pl-2 text-base text-gray-400"
            dangerouslySetInnerHTML={{ __html: courseData.data.description }}
          />
        </div>

        {/* overlap card */}
        <div className="bg-white absolute z-10 top-5 right-3 md:w-[36%] ">
          <div className="border border-gray-300">
            <div>{/* careousel */}</div>
            <div className="md:p-4">
              <div className="flex">
                <p>tk.1000</p>
                <p>tk.2000</p>
                <div className="card-price">tk. 1000 off</div>
              </div>
              <div className="my-2">
                <button
                  className=" bg-green-500 md:w-full py-2 text-white text-[16px] rounded"
                  value={courseData.data.cta_text.value}
                >
                  {courseData.data.cta_text.name}
                </button>
              </div>
              <div className="">
                <h2 className="text-[20px] font-semibold mb-4">
                  এই কোর্সে যা থাকছে
                </h2>
                <div className="flex flex-col gap-0.5">
                  {courseData.data.checklist &&
                    courseData.data.checklist.length > 0 &&
                    courseData.data.checklist.map((data, index) => (
                      <div key={index} className="flex">
                        <Image
                          src={data.icon}
                          alt="icon"
                          className="w-5 h-5 inline-block mr-2"
                          width={5}
                          height={5}
                        />
                        <span className="pl-2 text-base">{data.text}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm flex justify-between mt-4">
            <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
            <p className="text-green-400">ফোন করুন (16910)</p>
          </div>
        </div>
      </div>
      {/* coursel nav section */}
      <div className="md:px-[10%] w-full">
        <DownNavSection courseData={courseData.data} />
      </div>
    </div>
  );
}
