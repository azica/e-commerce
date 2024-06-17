import { ArrowRightIcon } from "assets/icons";

import { LinkWrapper } from "./styles";

export const Link = ({ linkLabel, link }: { linkLabel: string; link: string }) => {
  return (
    <LinkWrapper to={link}>
      {linkLabel}
      <ArrowRightIcon />
    </LinkWrapper>
  );
};
