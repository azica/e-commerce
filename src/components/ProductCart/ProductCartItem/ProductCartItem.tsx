import { IconButton } from "@mui/material";

import { CloseIcon } from "assets/icons";

import { Title, Image, SubTitle, Wrapper, RightSide, Info } from "./styles";

export const ProductCartItem = ({ title, price, thumbnail, category }: Model.Product) => {
  return (
    <Wrapper>
      <Image>
        <img src={thumbnail} alt={title} />
      </Image>
      <Info>
        <Title>{title}</Title>
        <SubTitle>{category}</SubTitle>
      </Info>
      <RightSide>
        <Title>${price}</Title>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </RightSide>
    </Wrapper>
  );
};
