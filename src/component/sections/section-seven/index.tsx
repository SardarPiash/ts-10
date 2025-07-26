import ContentPreview from '@/component/content-preview'
import React from 'react'

export default function SectionType7({section}:{section:Section}) {
  return (
    <div id={section.type}>
                <ContentPreview data={section.values} />
              </div>
  )
}
