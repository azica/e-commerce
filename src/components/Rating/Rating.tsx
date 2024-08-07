import { useState } from "react";

import { StarFilledIcon, StarHalfIcon, StarIcon } from "assets/icons";

import { Star, Wrapper, Reviews, Stars } from "./styles";

export const Rating = ({
  stars,
  reviewsQuantity,
  showText,
}: {
  stars: number;
  reviewsQuantity?: number;
  showText?: boolean;
}) => {
  const [rating, setRating] = useState(stars);

  const handleClick = (value: number) => {
    setRating(value);
    // if (onChange) {
    //     onChange(value);
    // }
  };

  return (
    <Wrapper>
      <Stars>
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
            <Star key={index} onClick={() => handleClick(index)} className={showText ? "showText" : ""}>
              {icon}
            </Star>
          );
        })}
      </Stars>
      {showText && reviewsQuantity ? (
        <Reviews fontFamily="fontFamily.interRegular" color="primary.700">
          {reviewsQuantity} Reviews
        </Reviews>
      ) : null}
    </Wrapper>
  );
};
