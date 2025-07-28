'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(
        <Star key={i} className="w-4 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <Star
          key={i}
          className="w-4 h-5 md:w-6 md:h-6 text-yellow-500"
          style={{ fill: 'url(#halfGradient)', stroke: '#facc15' }}
        />
      );
    } else {
      stars.push(
        <Star
          key={i}
          className="w-4 h-5 md:w-6 md:h-6 text-yellow-500"
          style={{ fill: 'white', stroke: '#facc15', strokeWidth: 2 }}
        />
      );
    }
  }

  return (
    <div className="flex items-center space-x-1 bg-transparent md:p-2 rounded-md">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="halfGradient" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      {stars}
    </div>
  );
};

export default StarRating;
