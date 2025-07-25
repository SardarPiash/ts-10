import Image from 'next/image'
import React from 'react'

export default function SectionType3({section}:{section:Section}) {
  return (
    <div
                    id={section.type}
                    className="bg-[#111827] text-white md:p-6 rounded-md"
                  >
                    {section.values && section.values.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                        {section.values.map((data, inx) => (
                          <div key={inx} className="flex items-start gap-3">
                            {data.icon && (
                              <Image
                                src={data.icon}
                                alt="icon"
                                width={40}
                                height={40}
                                className="md:w-10 md:h-10 w-8 h-8"
                              />
                            )}
                            <div>
                              <p className="text-[18px] font-medium">
                                {data.title}
                              </p>
                              <p className="text-[14px] font-normal">
                                {data.subtitle}
                              </p>
                              {data.text && (
                                <span className="text-sm">{data.text}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
  )
}
