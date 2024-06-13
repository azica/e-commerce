import { NavLinkWrap } from "./styles";

interface ExtendedSideMenuItem extends SideMenuItem {
  active: boolean;
}

export const NavLink = ({ url, title, state, active }: ExtendedSideMenuItem) => {

  return (
    <NavLinkWrap to={url} state={state} className={active ? "active" : ""}>
      {title}
    </NavLinkWrap>
  );
};
