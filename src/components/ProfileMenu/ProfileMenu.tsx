import type { MouseEvent } from "react";

import { Menu } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserCircleIcon } from "assets/icons";
import { clearLocalStorage } from "shared/helpers/localStorage";
import { useActions, useAppSelector } from "shared/store/hooks";
import { neutral07, green } from "styles/colors";
import { Button, MenuItem } from "./styles";

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { setUser } = useActions();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logHandle = () => {
    if (user) {
      clearLocalStorage();
      setUser(null);
      enqueueSnackbar("You have logged out successfully!", {
        variant: "success",
        autoHideDuration: 2000,
      });
      handleClose();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <UserCircleIcon style={{ color: user ? green : neutral07 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock={true}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>
          <Link to="/dashboard">My account</Link>
        </MenuItem>
        <MenuItem onClick={logHandle}>{user ? "Logout" : "Login"}</MenuItem>
      </Menu>
    </>
  );
};
