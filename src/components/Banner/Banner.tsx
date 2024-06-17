import { Typography } from "@mui/material";

import imageurl from "assets/images/bannerBg.png";
import { Link } from "components/Link";

import { Section, Content, Image, Sale } from "./styles";

export const Banner = () => {
  return (
    <Section>
      <Image>
        <img src={imageurl} alt="banner" />
      </Image>
      <Content>
        <Sale>SALE UP TO 35% OFF</Sale>
        <Typography variant="h4">HUNDREDS of New lower prices!</Typography>
        <Typography variant="body1">
          It’s more affordable than ever to give every room in your home a stylish makeover
        </Typography>
        <Link linkLabel="Shop Now" link="/shop" />
      </Content>
    </Section>
  );
};
