import { Link } from "react-router-dom";

import { socialLinks } from "assets/data/mockdata";

import { IconWrap, Wrapper } from "./styles";

export const SocialLinks = ({ isMobileMenu }: { isMobileMenu?: boolean }) => {

  return (
    <Wrapper className={isMobileMenu ? "mobile" : ""}>
      {socialLinks.map((item) => (
        <IconWrap key={item.id}>
          <Link to={item.link}>{item.icon}</Link>
        </IconWrap>
      ))}
    </Wrapper>
  );
};
