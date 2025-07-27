'use client';

import { useEffect, useRef, useState } from 'react';
import OverlapCourseDetailsCard from './OverlapCourseDetailsCard';
import CardTextContent from './CardTextContent';

export default function StickyCardWrapper({ courseData }: { courseData: ApiResponse }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting && entry.intersectionRatio === 0);
      },
      {
        root: null,
        threshold: 1.0,
        rootMargin: '650px 0px 0px 0px',
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

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
