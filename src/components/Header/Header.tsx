import type { MouseEvent } from "react";

import { Box, IconButton } from "@mui/material";
import { useState } from "react";

import { ArrowDownIcon, MessageIcon } from "assets/icons";
import { Avatar } from "components/Avatar";
import { useAppSelector } from "shared/store/hooks";

import { ChatWrap, Title, Wrapper } from "./styles";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    return null;
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <Title variant="h2">
        Добро пожаловать, <span>{user.name}</span>!
      </Title>
      <ChatWrap>
        <MessageIcon />
        <span>2</span>
      </ChatWrap>
      <Box display="flex" alignItems="center">
        <Avatar image={user.avatar} name={user.name} />
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}>
          <ArrowDownIcon width={24} height={24} />
        </IconButton>
      </Box>

    </Wrapper>
  );
};

export default Header;
