import Image from 'next/image';
import React from 'react'
import VideoCarousel from './VideoCarousel';
import CardTextContent from './CardTextContent';

export default function OverlapCourseDetailsCard({
  courseData,
}: {
  courseData: ApiResponse;
}) {
  return (
    <div className="bg-white absolute z-10 top-14 right-[8%] md:w-[25%] p-4 border border-gray-300 overlap-card-container">
      <div className="">
        <div>
          <VideoCarousel media={courseData.data.media} />
        </div>
        <CardTextContent courseData={courseData} />
      </div>
      <div className="text-sm flex justify-between mt-4">
        <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
        <p className="text-green-400">ফোন করুন (16910)</p>
      </div>
      <div>
      </div>
    </div>
  )
}
