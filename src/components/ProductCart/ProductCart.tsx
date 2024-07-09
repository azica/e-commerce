import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ShopBagIcon } from "assets/icons";
import { useAppSelector } from "shared/store/hooks";

import { ProductCartItem } from "./ProductCartItem/ProductCartItem";
import { Drawer } from "components/Drawer";
import { CartTotals } from "components/CartTotals";
import { Button } from "components/FormElements";

import { ProductQuantity, CartList, Summary, IconButton, Buttons } from "./styles";
import { LinkWrapper } from "components/Wrappers";

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
          <Typography variant="body2" fontFamily="interSemiBold" color="primary.700">
            There is no products in the cart!
          </Typography>
        ) : (
          <CartList className={cartList.length > 2 ? "scrollbar" : ""}>
            {cartList.map((product) => (
              <ProductCartItem key={product.id} {...product} />
            ))}
          </CartList>
        )}
        <Summary>
          <CartTotals subtotal={subtotal} total={total} />
          <LinkWrapper url="cart/checkout">
            <Button variant="contained" fullWidth >
              Checkout
            </Button>
          </LinkWrapper>
          <Link to="/cart" className="link">View Cart</Link>
        </Summary>
      </Drawer>
    </>
  );
};
