import { Table, TableHead, TableRow, TableCell, Typography, TableBody } from "@mui/material";

import { cartTableMenu } from "assets/data/mockdata";

import ProductCartRow from "./ProductCartRow";
import { TableWrap } from "./styles";

export const ProductTable = ({ products, showMenu, smallTable, maxHeight }: ProductTable) => {
  return (
    <TableWrap maxHeight={maxHeight}>
      <Table aria-label="sticky table" stickyHeader>
        {showMenu ? (
          <TableHead>
            <TableRow>
              {cartTableMenu.map((tab, index) => {
                const lastItem = index === cartTableMenu.length - 1;
                return (
                  <TableCell key={tab} sx={{ minWidth: lastItem ? "120px" : "" }}>
                    <Typography
                      fontFamily="fontFamily.interSemiBold"
                      color="black.900"
                      variant="body2"
                      textAlign={lastItem || index === 1 ? "right" : "inherit"}>
                      {tab}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {products.map((product) => (
            <ProductCartRow key={product.id} product={product} smallTable={smallTable} />
          ))}
        </TableBody>
      </Table>
    </TableWrap>
  );
};

export default ProductTable;
