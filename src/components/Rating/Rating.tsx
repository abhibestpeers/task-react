import * as React from "react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

interface Rating {
  rating: number;
}

const Rating = (rating: Rating) => {
  const [portRatings, setPortRatings] = useState();

  const ratingChanged = (rating) => {
    console.log(rating.averageRating);
    setPortRatings(rating.averageRating);
  };

  useEffect(()=>{
    ratingChanged(rating);
  },[])

  console.log(portRatings)

  return (
    <ReactStars
      value={portRatings}
      size={24}
      onChange={null}
      color="#ffd700"
      // activeColor="#ffd700"
      isHalf={true}
    />
  );
};

export default Rating;
