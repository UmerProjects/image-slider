import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handlMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => {
              handlMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            size={40}
          />
        );
      })}
    </div>
  );
}
