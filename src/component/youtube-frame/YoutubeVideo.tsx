'use client'; 

import { useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  thumbnail: string;
  title: string;
}


export default function YoutubeVideo({ videoId, thumbnail, title }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative w-full max-w-md aspect-video mx-auto cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying && (
        <>
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-3">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {isPlaying && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
