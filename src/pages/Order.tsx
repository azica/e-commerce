import { Typography } from '@mui/material'
import { Container } from 'components/Wrappers/Container'

const Order = () => {
    return (
        <Container>
            <Typography variant="h6" color="primary.400" align="center">
                Thank you!🎉
            </Typography>
            <Typography variant="heading7" color="primary.700" align="center">
                Your order has been received
            </Typography>
        </Container>
    )
}

export default Order