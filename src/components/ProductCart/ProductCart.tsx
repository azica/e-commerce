import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ShopBagIcon } from "assets/icons";
import { Button } from "components/FormElements";
import { useAppSelector } from "shared/store/hooks";

import { ProductCartItem } from "./ProductCartItem/ProductCartItem";
import { ProductQuantity, CartList, Subtotal, Total, Summary, IconButton, Buttons } from "./styles";
import { Drawer } from "components/Drawer";

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
          <Subtotal>
            <Typography variant="body2" fontFamily="interRegular" color="primary.700">
              Subtotal
            </Typography>
            <Typography variant="body2" fontFamily="interSemiBold" color="primary.700">
              ${subtotal}
            </Typography>
          </Subtotal>
          <Total>
            <Typography variant="heading7" color="primary.700">
              Total
            </Typography>
            <Typography variant="heading7" color="primary.700">
              ${total}
            </Typography>
          </Total>
          <Button variant="contained" fullWidth link="/checkout">
            Checkout
          </Button>
          <Link to="/cart" className="link">View Cart</Link>
        </Summary>
      </Drawer>
    </>
  );
};
