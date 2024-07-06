import { Box, Typography } from "@mui/material"
import { Wrapper } from "./styles"
import { Review } from "./Review"
import { Sort } from "components/Sort"
import { Rating } from "components/Rating"
import { FeedbackForm } from "components/FeedbackForm"

export const Reviews = ({ reviews, title }: { reviews?: Model.Review[]; title: string }) => {
    return (
        <Wrapper display="flex" flexDirection="column" gap={5}>
            <Typography variant="h6" color="black">Customer Reviews</Typography>
            <Rating stars={5} showText reviewsQuantity={reviews?.length} />
            <Box>
                <Typography variant="body2" color="neutral.600" fontFamily="fontFamily.interRegular">Be the first to review</Typography>
                <Typography variant="body2" color="neutral.600" fontFamily="fontFamily.interSemiBold">{title}</Typography>
            </Box>
            <FeedbackForm />
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" color="black">{reviews?.length} Reviews</Typography>
                <Sort
                    options={[]}
                    placeholder="Newest"
                />
            </Box>
            <Box display="flex" flexDirection="column" gap={3}>
                {reviews && reviews.map((review, index) => (<Review key={index} {...review} />))}
            </Box>
        </Wrapper>
    )
}

