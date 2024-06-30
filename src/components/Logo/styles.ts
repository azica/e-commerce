import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/media";

export const LogoWrap = styled(Link)`
  width: 105px;
  height: 25px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

 @media ${device.sm} {
    width: 70px;
    height: 24px;
  }
`;
