import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import { ArrowNextIcon } from "assets/icons";

import { BreadcrumbsWrapper, BreadcrumbsLink } from "./styles";

export const Breadcrumbs = ({ center, title }: { center?: boolean; title?: string }) => {
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
        const isProductSegment = index === 0 && value === "product";
        const segment = isProductSegment ? "shop" : value;
        const to = `/${pathnames
          .slice(0, index + 1)
          .map((seg, i) => (i === 0 && seg === "product" ? "shop" : seg))
          .join("/")}`;

        return index === pathnames.length - 1 ? (
          <Typography key={to} color="black.900" fontFamily="fontFamily.interMedium">
            {title || segment}
          </Typography>
        ) : (
          <BreadcrumbsLink to={to} key={to}>
            {segment}
          </BreadcrumbsLink>
        );
      })}
    </BreadcrumbsWrapper>
  );
};

