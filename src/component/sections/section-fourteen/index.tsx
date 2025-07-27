import React from 'react'

export default function SectionType14({section}:{section:Section}) {
  return (
    <div id={section.type} className="md:border md:border-[#dbe1eb] md:p-5 rounded-md">
      <p>কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে <span className="underline cursor-pointer text-green-500">এই ভিডিওটি দেখুন</span></p>
    </div>
  )
}
