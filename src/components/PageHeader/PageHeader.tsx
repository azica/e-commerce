import { Typography } from "@mui/material";

import { Section, Inner } from "./styles";

export const PageHeader = ({ title, backgroundImage, subtitle, breadcrumbs }: PageHeader) => {
  return (
    <Section style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Inner>
        {breadcrumbs}
        <Typography variant="h3" color="black.100">
          {title}
        </Typography>
        <Typography variant="body1" color="black.900">
          {subtitle}
        </Typography>
      </Inner>
    </Section>
  );
};
