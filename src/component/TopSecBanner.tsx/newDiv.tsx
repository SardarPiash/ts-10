'use client';

import { useEffect, useRef, useState } from 'react';
import OverlapCourseDetailsCard from './OverlapCourseDetailsCard';

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
        rootMargin: '500px 0px 0px 0px',
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
        <div className="fixed z-50 top-[100px] right-4 w-[300px] shadow-lg bg-white border border-gray-200 p-4 rounded-md">
          <p className="text-lg font-semibold mb-2">এই কোর্সে যা থাকছে</p>
          <ul className="list-disc ml-4 text-sm">
            {courseData.data.checklist?.slice(0, 4).map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 w-full rounded">
            {courseData.data.cta_text.name}
          </button>
        </div>
      )}
    </>
  );
}
