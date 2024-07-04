import { Box, Typography } from "@mui/material"
import { Wrapper } from "./styles"
import { Review } from "./Review"
import { Sort } from "components/Sort"
import { Rating } from "components/Rating"

export const Reviews = ({ reviews }: { reviews?: Model.Review[] }) => {
    return (
        <Wrapper display="flex" flexDirection="column" gap={5}>
            <Typography variant="h6" color="black">Customer Reviews</Typography>
            <Rating stars={5} />
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

