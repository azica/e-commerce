import { NavLinkWrap } from "./styles";

interface ExtendedSideMenuItem extends SideMenuItem {
  active: boolean;
  onClick?: () => void;
}

export const NavLink = ({ url, title, state, active, onClick }: ExtendedSideMenuItem) => {
  return (
    <NavLinkWrap to={url} state={state} className={active ? "active" : ""} onClick={onClick}>
      {title}
    </NavLinkWrap>
  );
};
