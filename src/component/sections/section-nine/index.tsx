import React from 'react'

export default function SectionType9({section}:{section:Section}) {
  return (
    <div id={section.type} className="relative w-full overflow-hidden bg-no-repeat bg-cover  rounded-lg bg-[url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)]">
                      <div className="text-white py-5 px-5">
                        <div className="border-3 md:border-4 border-white/30 rounded-md p-3 md:px-[40px] md:py-5">
                          <p className="md:text-xl text-[16px] font-600 md:mb-2">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</p>
                          <ul className="text-[14px] md:text-[16px]">
                            <li className="flex items-center gap-1.5 ">
                              <span className="md:text-xl leading-none">•</span>
                              <p>360 পৃষ্ঠা</p>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="md:text-xl leading-none">•</span><p>প্রিমিয়াম হার্ডকপি</p></li>
                            <li className="flex items-center gap-1.5">
                              <span className="md:text-xl leading-none">•</span><p>ফ্রি ডেলিভারি</p></li>
                            <li className="flex items-center gap-1.5">
                              <span className="md:text-xl leading-none">•</span><p>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</p></li>
                          </ul>
                        </div>
                      </div>
                    </div>
  )
}
