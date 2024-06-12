import type { FC } from "react";

import { Fade } from "@mui/material";

import { CircularProgress } from "./styles";

export const ButtonPreloader: FC<ButtonPreloader> = ({ variant, disabled, outside, loading }) => {
  return (
    <Fade
      in={loading}
      style={{
        transitionDelay: loading ? "250ms" : "0ms",
      }}
      unmountOnExit>
      <CircularProgress
        size={outside ? 25 : 20}
        format={`${variant ? variant : "contained"}`}
        outside={`${outside}`}
        disabled={disabled}
      />
    </Fade>
  );
};
