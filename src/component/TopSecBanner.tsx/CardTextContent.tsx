import Image from 'next/image'
import React from 'react'

export default function CardTextContent({
    courseData,
}: {
    courseData: ApiResponse;
}) {
    return (
        <div>
            <div className="flex items-center gap-3 md:my-4 md:pl-[10px]">
                <p className="text-[24px]">৳1000</p>
                <p className="line-through text-[20px]"> ৳2000</p>
                <div className="card-price">• 1000 ৳ ছাড়</div>
            </div>
            <div className="my-2">
                <button
                    className=" bg-green-500 md:w-full py-2 text-white text-[16px] rounded"
                    value={courseData.data.cta_text.value}
                >
                    {courseData.data.cta_text.name}
                </button>
            </div>
            <div className="md:mt-5">
                <h2 className="text-[20px] font-semibold mb-3">
                    এই কোর্সে যা থাকছে
                </h2>
                <div className="flex flex-col gap-1.5">
                    {courseData.data.checklist &&
                        courseData.data.checklist.length > 0 &&
                        courseData.data.checklist.map((data, index) => (
                            <div key={index} className="flex">
                                <Image
                                    src={data.icon}
                                    alt="icon"
                                    className="w-5 h-5 inline-block mr-2"
                                    width={5}
                                    height={5}
                                />
                                <span className="pl-2 text-base">{data.text}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
