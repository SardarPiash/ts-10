import FAQ from '@/component/faq'
import React from 'react'

export default function SectionType15({section}:{section:Section}) {
  return (
    <div id={section.type} className="md:border md:border-[#dbe1eb] md:p-5 rounded-md">
      <FAQ data={section.values} />
    </div>
  )
}
