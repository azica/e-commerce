import { Box, Typography } from "@mui/material"
import { Rating } from "components/Rating"

import { Wrapper } from "./styles";
import { timeAgo } from "shared/helpers/utils";

export const Review = ({ reviewerEmail, reviewerName, comment, rating, date }: Model.Review) => {

    return (
        <Wrapper display="flex" flexDirection="column" gap={2}>
            <Typography
                fontFamily="fontFamily.interSemiBold"
                color="neutral.700"
                variant="body1">
                {reviewerName}
            </Typography>
            <Rating stars={rating} />
            <Typography
                fontFamily="fontFamily.interRegular"
                color="neutral.700"
                variant="body2">
                {comment}
            </Typography>
            <Box display="flex" gap={2}>
                <Typography fontFamily="fontFamily.interRegular" >
                    {timeAgo(date)}
                </Typography>
                <Typography
                    fontFamily="fontFamily.interSemiBold"
                    color="neutral.700"
                >Like</Typography>
                <Typography
                    fontFamily="fontFamily.interSemiBold"
                    color="neutral.700"
                >Reply</Typography>
            </Box>
        </Wrapper>
    )
}

