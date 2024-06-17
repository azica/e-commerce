import { useState } from "react";

import { StarFilledIcon, StarHalfIcon, StarIcon } from "assets/icons";

import { Star, Wrapper } from "./styles";

export const Rating = ({ stars }: { stars: number }) => {
  const [rating, setRating] = useState(stars);

  const handleHover = (value: number) => {
    setRating(value);
  };

  const handleClick = (value: number) => {
    setRating(value);
    // if (onChange) {
    //     onChange(value);
    // }
  };

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((index) => {
        const roundedRating = Math.round(rating * 2) / 2;
        let icon;
        if (index <= roundedRating) {
          icon = <StarFilledIcon />;
        } else if (index - 0.5 === roundedRating) {
          icon = <StarHalfIcon />;
        } else {
          icon = <StarIcon />;
        }
        return (
          <Star
            key={index}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(stars)}
            onClick={() => handleClick(index)}>
            {icon}
          </Star>
        );
      })}
    </Wrapper>
  );
};
