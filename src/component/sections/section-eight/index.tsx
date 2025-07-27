import Image from 'next/image'
import React from 'react'

export default function SectionType8({section}:{section:Section}) {
  return (
    <div id={section.type} className="border border-[#dbe1eb] rounded-md md:px-5 md:py-5">
                {section.values.map((data, inx) => (
                  <div key={inx} className="md:py-0">
                    <h2 className="text-base font-semibold md:my-3 text-[16px]">{data.title}</h2>
                    <div className="flex justify-between items-center">
                      <div>
                        {data?.checklist?.map((ele, i) => (
                          <p className="pt-1  md:mb-3 text-[16px] text-[#4B5563]" key={i}>{ele}</p>
                        ))}
                      </div>
                      <div className="bg-red-400">
                        {data.file_url && (
                          <Image
                            src={data.file_url}
                            height={100}
                            width={100}
                            alt="image"
                            className=" md:w-[160px] object-cover"
                          />
                        )}
                      </div>
                    </div>
                    {
                      inx === 0 && (
                        <div className="border-t border-[#dbe1eb] md:mt-5">

                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
  )
}
