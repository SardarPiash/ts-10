'use client'

import React from 'react'
import Carousel from '../carousel.tsx/Carousel'
import YoutubeVideo from '../youtube-frame/YoutubeVideo'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'

export default function StudentTalk({ data }: { data: SectionValue[] }) {
    return (
        <div className="relative">
            <Carousel slidesPerView={1.8} leftButtonPosition="left-[-24px] top-[50%]" rightButtonPosition="right-[-32px] top-[50%]">
                {data.map((e, i) =>
                    e.video_url && e.thumb ? (
                        <SwiperSlide key={i}>
                            <div className="md:mx-3  border border-[#dbe1eb] md:p-5 rounded-md">
                                <YoutubeVideo
                                    videoId={e.video_url}
                                    thumbnail={e.thumb}
                                    title={e.name || 'Student Video'}
                                />
                                <div className="flex gap-1 md:mt-3">
                                    <Image src={e.profile_image || ""} alt='user-image' height={40} width={40} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h3 className="text-base">{e.name}</h3>
                                        <p className="text-sm text-[#a3a3a3]">{e.description}</p>
                                    </div>

                                </div>
                            
                            
                            </div>
                        </SwiperSlide>
                    ) : null
                )}
            </Carousel>
        </div>
    )
}
