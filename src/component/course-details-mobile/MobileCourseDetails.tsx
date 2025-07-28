"use client";
import { useRef } from "react";
import CardTextContent from "../TopSecBanner/CardTextContent";
import { useStickyObserver } from "@/custom-hook/sticky-observer/useStickyObserver";

export default function MobileCourseDetails({
  courseData,
}: {
  courseData: ApiResponse;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isShowOrderButton = useStickyObserver(cardRef, { offset: -400 });

  return (
    <div className="md:hidden px-5 pt-5">
      <div ref={cardRef}>
        <CardTextContent courseData={courseData} />
      </div>

      {isShowOrderButton && (
        <div className="fixed bottom-0 left-0 w-full h-[150px] bg-white text-black p-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 my-4 pl-[10px]">
                <p className="text-[24px]">৳1000</p>
                <p className="line-through text-[20px]"> ৳2000</p>
                <div className="card-price">• 1000 ৳ ছাড়</div>
            </div>
            <button
                    className=" bg-green-500 w-full py-2 text-white text-[16px] rounded-md border-b-4 border-b-green-800"
                    value={courseData.data.cta_text.value}
                >
                    {courseData.data.cta_text.name}
                </button>
        </div>


      )}
    </div>
  );
}
