import { Skeleton, Stack } from "@mui/material";

export const ProductCardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={349} animation="wave" />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};
