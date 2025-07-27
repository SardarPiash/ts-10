import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SectionType2({section}:{section:Section}) {
  return (
    <div
        id={section.type}
        className="md:border md:border-[#dbe1eb] md:p-5 flex flex-row items-center rounded-md gap-3 md:gap-0"
      >
        <div>
          {section.values[0]?.image && (
            <Image
              src={section.values[0].image}
              alt="image"
              height={40}
              width={50}
              className="rounded-full md:w-[73px] md:h-[73px]"
            />
          )}
        </div>
        <div className="flex flex-col md:ml-4 text-black">
          <Link
            href="#munzarin-shohid"
            className="text-[14px] md:text-[18px] cursor-hover hover:text-green-500 md:py-1"
          >
            {section.values[0].name}
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: section.values[0].description || "",
            }}
            className="text-[14px]"
          />
        </div>
      </div>
  )
}
