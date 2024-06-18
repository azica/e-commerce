import { IconButton, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { CloseIcon, ShopBagIcon } from "assets/icons";
import { Button } from "components/FormElements";
import { useAppSelector } from "shared/store/hooks";

import { ProductCartItem } from "./ProductCartItem/ProductCartItem";
import { Title, ProductQuantity, CartList, Subtotal, Total, Summary } from "./styles";

export const ProductCart = () => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [open, setOpen] = useState(false);

  const [subtotal, setSubtota] = useState(0);
  const [total, setTotal] = useState(0);

  const { products } = useAppSelector((state) => state.product);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <ShopBagIcon />
        <ProductQuantity>
          <span>{productQuantity || 0}</span>
        </ProductQuantity>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Title variant="h6">
          Cart
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Title>
        <CartList>
          {products.map((product) => (
            <ProductCartItem key={product.id} {...product} />
          ))}
        </CartList>
        <Summary>
          <Subtotal>
            <Typography variant="body2">Subtotal</Typography>
            <Typography variant="body2" className="subtotal">
              ${subtotal}
            </Typography>
          </Subtotal>
          <Total>
            <Typography variant="heading7">Total</Typography>
            <Typography variant="heading7">${total}</Typography>
          </Total>
          <Button variant="contained" fullWidth>
            Checkout
          </Button>
          <Link to="/cart">View Cart</Link>
        </Summary>
      </Drawer>
    </>
  );
};
