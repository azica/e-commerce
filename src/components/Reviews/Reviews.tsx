import { Box, Typography } from "@mui/material";

import { reviewsOptions } from "assets/data/mockdata";
import { FeedbackForm } from "components/FeedbackForm";
import { Rating } from "components/Rating";
import { Sort } from "components/Sort";

import { Review } from "./Review";
import { Wrapper } from "./styles";

export const Reviews = ({ reviews, title }: { reviews?: Model.Review[]; title: string }) => {
  return (
    <Wrapper display="flex" flexDirection="column" gap={5}>
      <Typography variant="h6" color="black">
        Customer Reviews
      </Typography>
      <Rating stars={5} showText reviewsQuantity={reviews?.length} />
      <Box display="flex" gap={1}>
        <Typography variant="body2" color="neutral.600" fontFamily="fontFamily.interRegular">
          Be the first to review
        </Typography>
        <Typography variant="body2" color="neutral.600" fontFamily="fontFamily.interSemiBold">
          {title}
        </Typography>
      </Box>
      <FeedbackForm />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" color="black">
          {reviews?.length} Reviews
        </Typography>
        <Sort options={reviewsOptions} placeholder="Newest" bordered searchNames={["reviews"]} />
      </Box>
      <Box display="flex" flexDirection="column" gap={3}>
        {reviews && reviews.map((review, index) => <Review key={index} {...review} />)}
      </Box>
    </Wrapper>
  );
};
