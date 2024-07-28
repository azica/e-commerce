import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ShopBagIcon } from "assets/icons";
import { CartTotals } from "components/CartTotals";
import { Drawer } from "components/Drawer";
import { Button } from "components/FormElements";
import { ProductTable } from "components/ProductTable";
import { LinkWrapper } from "components/Wrappers";
import { useAppSelector } from "shared/store/hooks";

import { ProductQuantity, Summary, IconButton, Buttons } from "./styles";

export const ProductCart = ({ isMobileMenu }: { isMobileMenu?: boolean }) => {
  const [open, setOpen] = useState(false);

  const { cartList, subtotal, total, totalQuantity } = useAppSelector((state) => state.cart);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Buttons className={isMobileMenu ? "mobile" : ""}>
        <IconButton onClick={toggleDrawer(true)}>
          <ShopBagIcon />
        </IconButton>
        <ProductQuantity>
          <span>{totalQuantity || 0}</span>
        </ProductQuantity>
      </Buttons>
      <Drawer title="Cart" toggleDrawer={toggleDrawer(false)} open={open} isRight>
        {cartList.length === 0 ? (
          <Box textAlign="center" display="flex" flexDirection="column" gap={2}>
            <Typography variant="body2" fontFamily="interSemiBold" color="primary.700">
              There is no products in the cart!
            </Typography>
            <LinkWrapper url="shop">
              <Button size="small" onClick={toggleDrawer(false)}>
                Go to Shop
              </Button>
            </LinkWrapper>
          </Box>
        ) : (
          <>
            <ProductTable products={cartList} smallTable={true} />

            <Summary>
              <CartTotals subtotal={subtotal} total={total} />
              <LinkWrapper url="cart/shopping">
                <Button variant="contained" fullWidth onClick={toggleDrawer(false)}>
                  Checkout
                </Button>
              </LinkWrapper>
              <Link to="/cart" className="link">
                View Cart
              </Link>
            </Summary>
          </>
        )}
      </Drawer>
    </>
  );
};
