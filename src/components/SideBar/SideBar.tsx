import { Box, Typography } from "@mui/material";

import { prices } from "assets/data/mockdata";
import { FilterIcon } from "assets/icons";
import { CheckboxList } from "components/FormElements/CheckboxList";
import { Preloader } from "components/Preloader";
import { SideMenu } from "components/SideMenu";
import { useAppSelector } from "shared/store/hooks";

import { Title, Wrapper, Filter } from "./style";

export const SideBar = () => {
  const { gridLayout, loading } = useAppSelector((state) => state.product);

  return (
    <Wrapper className={gridLayout}>
      {gridLayout === "grid1" ? (
        <Filter>
          <FilterIcon />
          <Typography variant="body1" color="black.900" fontFamily="fontFamily.interSemiBold">
            Filter
          </Typography>
        </Filter>
      ) : null}
      <Box>
        <Title variant="body2" color="black.900" fontFamily="fontFamily.interSemiBold">
          CATEGORIES
        </Title>
        <Preloader active={loading}>
          <SideMenu gridLayout={gridLayout} />
        </Preloader>
      </Box>
      <Box>
        <Title variant="body2" color="black.900" fontFamily="fontFamily.interSemiBold">
          PRICE
        </Title>
        <Preloader active={loading}>
          <CheckboxList list={prices} searchParamName="prices" />
        </Preloader>
      </Box>
    </Wrapper>
  );
};
