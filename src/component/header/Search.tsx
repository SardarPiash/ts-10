'use client';
import IconSearch from '@/svgIcon/IconSearch';
import React, { useEffect, useRef, useState } from 'react';

export default function Search() {
  const [showSearchItem, setShowSearchItem] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  function handleSearchOpen() {
    setShowSearchItem(true);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchItem(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="relative shadow-0 rounded-b-[23px] flex w-full md:w-[60%] items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border"
      onClick={handleSearchOpen}
    >
      <IconSearch />
      <input
        type="text"
        placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
        className="w-full outline-none"
      />

      {showSearchItem && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md p-4 z-50">
            <li>SSC বাংলা ১ম পত্র ফাইনাল প্রস্তুতি কোর্স</li>
            <li>HSC ICT মাস্টারক্লাস</li>
            <li>জব প্রিপারেশন: লিখিত ও ভাইভা গাইডলাইন</li>
            <li>ইংরেজি গ্রামার ফাউন্ডেশন কোর্স</li>
        </div>
      )}
    </div>
  );
}
