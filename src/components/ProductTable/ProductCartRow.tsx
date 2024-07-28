import { TableRow, TableCell, Box, Typography } from "@mui/material";

import { CloseIcon } from "assets/icons";
import { CounterButtons } from "components/CounterButtons";
import { useActions } from "shared/store/hooks";

import { Image, RemoveButton, Title } from "./styles";

const ProductCartRow = ({ product, smallTable }: { product: Model.CartItem; smallTable?: boolean }) => {
  const { removeFromCart } = useActions();

  const removeHandler = (id: number) => {
    removeFromCart(id);
  };

  return (
    <TableRow key={product.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell colSpan={2}>
        <Box display="flex" gap={2} alignItems={smallTable ? "flex-start" : "center"}>
          <Image>
            <img src={product.thumbnail} alt={product.title} />
          </Image>
          <Box
            display="flex"
            flex={1}
            gap={2}
            flexDirection={smallTable ? "column" : "row"}
            alignItems={smallTable ? "flex-start" : "center"}
            justifyContent="space-between">
            <Box alignItems={"left"}>
              <Title fontFamily="fontFamily.interSemiBold" color="primary.700">
                {product.title}
              </Title>
              {smallTable ? null : (
                <RemoveButton onClick={() => removeHandler(product.id)}>
                  <CloseIcon /> Remove
                </RemoveButton>
              )}
            </Box>

            <CounterButtons product={product} outlined />
          </Box>
        </Box>
      </TableCell>

      <TableCell align="right">
        <Box>
          <Typography fontFamily="fontFamily.interRegular" color="black.900" fontSize={"18px"}>
            ${product.price}
          </Typography>
          {smallTable ? (
            <RemoveButton onClick={() => removeHandler(product.id)} className="left">
              <CloseIcon />
            </RemoveButton>
          ) : null}
        </Box>
      </TableCell>
      {smallTable ? null : (
        <TableCell align="right">
          <Typography fontFamily="fontFamily.interSemiBold" color="black.900" fontSize={"18px"}>
            ${(product.price * product.quantity).toFixed(2)}
          </Typography>
        </TableCell>
      )}
    </TableRow>
  );
};

export default ProductCartRow;
