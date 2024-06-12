import { IconWrap, NavLink } from "./styles";

interface ExtendedSideMenuItem extends SideMenuItem {
  active: boolean;
}

export const SideMenuLink = ({ url, title, icon, state, active }: ExtendedSideMenuItem) => {
  const Icon = icon;

  return (
    <NavLink to={url} state={state} className={active ? "active" : ""}>
      <IconWrap>
        <Icon />
      </IconWrap>
      {title}
    </NavLink>
  );
};
