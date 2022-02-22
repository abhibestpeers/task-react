import * as React from "react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

interface Rating {
  averageRating: number;
}

const Rating = (rating: Rating) => {
  const [portRatings, setPortRatings] = useState(rating.averageRating);

  const ratingChanged = (rating) => {
    console.log(rating.averageRating);
    setPortRatings(rating.averageRating);
  };

  console.log(portRatings)

  return (
    <ReactStars
      value={portRatings}
      size={24}
      onChange={ratingChanged}
      activeColor="#ffd700"
      isHalf={true}
    />
  );
};

export default Rating;
