import { useAppSelector } from "shared/store/hooks";

import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, TableContainer } from "@mui/material";
import { CounterButtons } from "components/CounterButtons";
import { Button } from "components/FormElements";

export const tabsMenu = ["Product", "Quantity", "Price", "Subtotal"];

import { Image, RemoveButton, Summary, TableWrap, Wrapper } from "./styles"
import { CartTotals } from "components/CartTotals";
import { CloseIcon } from "assets/icons";
import { Shipping } from "components/Shipping";

export const CartTable = () => {
    const { cartList, subtotal, total } = useAppSelector((state) => state.cart);

    return (
        <Wrapper>
            <TableWrap>
                <Table aria-label="sticky table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {tabsMenu.map((tab) => (<TableCell key={tab}>
                                <Typography fontFamily="fontFamily.interSemiBold" color="black.900" variant="body2">
                                    {tab}
                                </Typography>
                            </TableCell>))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartList.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <Box display="flex" gap={2}>
                                        <Image>
                                            <img src={product.thumbnail} alt={product.title} />
                                        </Image>
                                        <Box>
                                            <Typography fontFamily="fontFamily.interSemiBold" color="neutral.700">
                                                {product.title}
                                            </Typography>
                                            <RemoveButton>
                                                <CloseIcon /> Remove
                                            </RemoveButton>
                                        </Box>
                                    </Box>
                                </TableCell>

                                <TableCell align="center">
                                    <CounterButtons product={product} outlined />
                                </TableCell>
                                <TableCell align="center">
                                    <Typography fontFamily="fontFamily.interRegular" color="black.900" fontSize={"18px"}>
                                        ${product.price}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography fontFamily="fontFamily.interSemiBold" color="black.900" fontSize={"18px"}>
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableWrap>

            <Summary>
                <Typography color="neutral.900" variant="heading7">
                    Cart summary
                </Typography>
                <Shipping />
                <CartTotals subtotal={subtotal} total={total} />
                <Button variant="contained" fullWidth link="/checkout">
                    Checkout
                </Button>
            </Summary>
        </Wrapper>
    )
}
