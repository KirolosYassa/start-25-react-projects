import "./styles.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  console.log(rating);
  return (
    <div className="home">
      {[...Array(numOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (rating || hoverRating) ? "active" : "inactive"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHoverRating(index)}
            onMouseLeave={() => setHoverRating(rating)}
          />
        );
      })}
    </div>
  );
}
