import React from 'react'
import StarRating from '../ratting';
import StickyCardWrapper from './StickyCardWrapper';

export default function TopSecBanner({
  courseData,
}: {
  courseData: ApiResponse;
}) {
  return (
        <div className="description-container-bg md:py-14 md:px-[8%] relative min-h-[300px]">
        <div className="text-white w-[60%] flex flex-col justify-start items-start h-full">
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
        <div>
          <StickyCardWrapper courseData={courseData} />
        </div>

      </div>
  )
}
