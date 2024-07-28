import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartTotals } from "components/CartTotals";
import { Button } from "components/FormElements";
import { ProductTable } from "components/ProductTable";
import { Shipping } from "components/Shipping";
import { LinkWrapper } from "components/Wrappers";
import { Container } from "components/Wrappers/Container";
import { useActions, useAppSelector, useUser } from "shared/store/hooks";

import { Summary, Wrapper } from "./styles";

export const Shopping = () => {
  const isAuth = useUser();
  const { cartList, subtotal, total } = useAppSelector((state) => state.cart);
  const { setCompletionStatus } = useActions();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setCompletionStatus({ step: "shopping", status: cartList.length > 0 && Boolean(isAuth) });
  }, [cartList, isAuth]);

  if (cartList.length === 0) {
    return (
      <Container>
        <Box display="flex" gap={2} flexDirection="column">
          <Typography variant="h4" color="primary.700" textAlign="center" mt={4}>
            There is not products in the cart!
          </Typography>
          <LinkWrapper url="/shop">
            <Button>Go to Shop</Button>
          </LinkWrapper>
        </Box>
      </Container>
    );
  }

  const clickHandle = () => {
    if (!isAuth) {
      enqueueSnackbar("Need to log in!", {
        variant: "info",
        autoHideDuration: 2000,
      });
      navigate("/login", { state: { from: "/cart/shopping" } });
    }
    if (cartList.length > 0 && isAuth) {
      setCompletionStatus({ step: "shopping", status: true });
      navigate("/cart/checkout");
    }
  };

  return (
    <Wrapper>
      <ProductTable products={cartList} showMenu />

      <Summary>
        <Typography color="neutral.900" variant="heading7">
          Cart summary
        </Typography>
        <Shipping />
        <CartTotals subtotal={subtotal} total={total} />
        <Button variant="contained" fullWidth onClick={clickHandle}>
          Checkout
        </Button>
      </Summary>
    </Wrapper>
  );
};
