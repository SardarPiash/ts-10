import React from 'react'
import StarRating from '../ratting';
import StickyCardWrapper from './StickyCardWrapper';
import VideoCarousel from './VideoCarousel';

export default function TopSecBanner({
  courseData,
}: {
  courseData: ApiResponse;
}) {
  return (
        <div className="description-container-bg md:py-14 md:px-[8%] relative min-h-[300px]">
        <div className="px-4 md:hidden">
          <VideoCarousel media={courseData.data.media}/>
        </div>
        <div className="text-white w-full mt-8 md:mt-0 px-4 md:px-0 md:w-[60%] flex flex-col justify-start items-start h-full">
          <h1 className="text-[21px] md:text-[36px] font-bold">{courseData.data.title}</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1.5 text-base">
            <StarRating rating={3.5} />
            <p className="text-[14px]">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
          </div>
          <div
            className="mt-2 md:pl-2 pb-10 md:pb-0 text-base text-gray-400"
            dangerouslySetInnerHTML={{ __html: courseData.data.description }}
          />
        </div>

        {/* overlap card */}
        <div className="hidden md:block">
          <StickyCardWrapper courseData={courseData} />
        </div>

      </div>
  )
}
