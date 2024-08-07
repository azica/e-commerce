import { NavLink } from "./styles";

interface ExtendedSideMenuItem extends SideMenuItem {
  active: boolean;
}

export const SideMenuLink = ({ url, title, state, active }: ExtendedSideMenuItem) => {
  return (
    <NavLink to={url} state={state} className={active ? "activeLink" : ""}>
      {title.split("-").join(" ")}
    </NavLink>
  );
};
