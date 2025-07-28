'use client';

import OverlapCourseDetailsCard from './OverlapCourseDetailsCard';
import CardTextContent from './CardTextContent';
import { useStickyObserver } from '@/custom-hook/sticky-observer/useStickyObserver';
import { useRef } from 'react';

export default function StickyCardWrapper({ courseData }: { courseData: ApiResponse }) {
  const cardRef =useRef<HTMLDivElement>(null);
  const showSticky = useStickyObserver(cardRef, {offset:650});

  return (
    <>
      <div ref={cardRef}>
        <OverlapCourseDetailsCard courseData={courseData} />
      </div>

      {showSticky && (
        <div className="fixed z-50 top-[100px] right-[12%] md:w-[26%] overlap-card-container">
            <div className="bg-white border border-gray-200 p-5">
              <CardTextContent courseData={courseData} />
            </div>
            <div className="text-sm flex justify-between mt-4 md:px-0">
              <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
              <p className="text-green-400">ফোন করুন (16910)</p>
            </div>
        </div>
      )}
    </>
  );
}
