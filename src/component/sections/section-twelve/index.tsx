import StudentTalk from '@/component/student-talk'
import React from 'react'

export default function SectionType12({section}:{section:Section}) {
  return (
    <div id={section.type}>
      <StudentTalk data={section.values} />
    </div>
  )
}
