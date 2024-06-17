import { NavLink } from "./styles";

interface ExtendedSideMenuItem extends SideMenuItem {
  active: boolean;
}

export const SideMenuLink = ({ url, title, state, active }: ExtendedSideMenuItem) => {
  console.log(active);
  return (
    <NavLink to={url} state={state} className={active ? "activeLink" : ""}>
      {title}
    </NavLink>
  );
};
