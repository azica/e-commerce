import { memo, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { prices } from "assets/data/mockdata";
import { FilterIcon } from "assets/icons";
import { CheckboxList } from "components/FormElements/CheckboxList";
import { SideMenu } from "components/SideMenu";
import { Title, Wrapper, Filter } from "./style";

export const SideBar = memo(() => {
  const memoizedPrices = useMemo(() => prices, []);

  return (
    <Wrapper>
      <Filter>
        <FilterIcon />
        <Typography variant="body1" color="black.900" fontFamily="fontFamily.interSemiBold">
          Filter
        </Typography>
      </Filter>
      <Box>
        <Title variant="body2" color="black.900" fontFamily="fontFamily.interSemiBold">
          CATEGORIES
        </Title>
        <SideMenu />
      </Box>
      <Box>
        <Title variant="body2" color="black.900" fontFamily="fontFamily.interSemiBold">
          PRICE
        </Title>
        <CheckboxList list={memoizedPrices} searchParamName="prices" />
      </Box>
    </Wrapper >
  );
});

