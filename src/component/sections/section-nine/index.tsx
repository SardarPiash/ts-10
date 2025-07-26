import React from 'react'

export default function SectionType9({section}:{section:Section}) {
  return (
    <div id={section.type} className="relative w-full overflow-hidden bg-no-repeat bg-cover  rounded-lg bg-[url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)]">
                      <div className="text-white py-5 px-5">
                        <div className="border-4 border-white/30 rounded-md md:px-[40px] md:py-5">
                          <p className="text-xl font-600 md:mb-2">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</p>
                          <ul>
                            <li className="flex items-center gap-1.5">
                              <span className="text-xl leading-none">•</span>
                              <p>360 পৃষ্ঠা</p>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-xl leading-none">•</span><p>প্রিমিয়াম হার্ডকপি</p></li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-xl leading-none">•</span><p>ফ্রি ডেলিভারি</p></li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-xl leading-none">•</span><p>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</p></li>
                          </ul>
    
                        </div>
    
                      </div>
                    </div>
  )
}
