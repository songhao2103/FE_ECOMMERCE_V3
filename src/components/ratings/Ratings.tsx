import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const renderStars = (rating: number, index: number) => {
  const isDecimal = rating % 1 !== 0;
  if (isDecimal && index === Math.floor(rating) - 1) return FaRegStarHalfStroke;

  if (index < Math.floor(rating) - 1) return FaStar;

  return FaRegStar;
};

interface IRatingsProps {
  rating: number;
}

const Ratings: React.FC<IRatingsProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((_, index) => {
        const StarIcon = renderStars(rating, index);
        return <StarIcon key={index} className="text-yellow-400" size={18} />;
      })}
    </div>
  );
};

export default Ratings;
