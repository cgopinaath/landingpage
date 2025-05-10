import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    position: string;
    avatar: string;
    rating: number;
    text: string;
    source: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-gray-800 transform transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-200">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-600">{review.position}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{review.text}</p>
      <div className="text-sm text-gray-500 flex items-center">
        <span className="inline-block px-2 py-1 bg-gray-100 rounded-full text-xs mr-2">
          {review.source}
        </span>
        <span>Verified Customer</span>
      </div>
    </div>
  );
};

export default ReviewCard;