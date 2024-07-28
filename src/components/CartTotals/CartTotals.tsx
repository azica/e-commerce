import { Box, Typography } from "@mui/material";

import { Subtotal, Total } from "./styles";

export const CartTotals = ({
  subtotal,
  total,
  shipping,
}: {
  subtotal: number;
  total: number;
  shipping?: string | number;
}) => {
  return (
    <Box>
      {shipping ? (
        <Subtotal>
          <Typography variant="body2" fontFamily="fontFamily.interRegular" color="primary.700">
            Shipping
          </Typography>
          <Typography variant="body2" fontFamily="fontFamily.interSemiBold" color="primary.700">
            {typeof shipping === "number" ? shipping.toFixed(2) : shipping}
          </Typography>
        </Subtotal>
      ) : null}
      <Subtotal>
        <Typography variant="body2" fontFamily="fontFamily.interRegular" color="primary.700">
          Subtotal
        </Typography>
        <Typography variant="body2" fontFamily="fontFamily.interSemiBold" color="primary.700">
          ${subtotal.toFixed(2)}
        </Typography>
      </Subtotal>
      <Total>
        <Typography variant="body1" fontFamily="fontFamily.interSemiBold" color="primary.700">
          Total
        </Typography>
        <Typography variant="body1" fontFamily="fontFamily.interSemiBold" color="primary.700">
          ${total.toFixed(2)}
        </Typography>
      </Total>
    </Box>
  );
};
