import { Typography } from "@mui/material"
import { Wrapper } from "../styles"
import { Rating } from "components/Rating"

export const Review = ({ reviewerEmail, reviewerName, comment, rating }: Model.Review) => {
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

        </Wrapper>
    )
}

