import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import { ArrowNextIcon } from "assets/icons";

import { BreadcrumbsWrapper, BreadcrumbsLink } from "./styles";

export const Breadcrumbs = ({ center }: { center?: boolean }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbsWrapper separator={<ArrowNextIcon />} className={center ? "center" : ""}>
      {pathnames.length > 0 ? (
        <BreadcrumbsLink to="/">Home</BreadcrumbsLink>
      ) : (
        <Typography color="black.900">Home</Typography>
      )}

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={to} color="black.900" fontFamily="fontFamily.interMedium">
            {value}
          </Typography>
        ) : (
          <BreadcrumbsLink to={to} key={to}>
            {value}
          </BreadcrumbsLink>
        );
      })}
    </BreadcrumbsWrapper>
  );
};
