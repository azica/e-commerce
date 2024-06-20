import { css } from "styled-components";

import {
  InterRegularWoff,
  InterRegularTtf,
  InterMediumWoff,
  InterMediumTtf,
  InterBoldWoff,
  InterBoldTtf,
  InterThinWoff,
  InterThinTtf,
  InterBoldOtf,
  InterMediumOtf,
  InterRegularOtf,
  InterThinOtf,
  InterSemiBoldOtf,
  InterSemiBoldTtf,
  InterSemiBoldWoff,
} from "assets/fonts/inter";
import {
  PoppinsBoldEot,
  PoppinsBoldTtf,
  PoppinsBoldWoff,
  PoppinsMediumEot,
  PoppinsMediumTtf,
  PoppinsMediumWoff,
  PoppinsRegularEot,
  PoppinsRegularTtf,
  PoppinsRegularWoff,
  PoppinsThinEot,
  PoppinsThinTtf,
  PoppinsThinWoff,
  PoppinsSemiBoldWoff,
  PoppinsSemiBoldTtf,
  PoppinsSemiBoldEot,
} from "assets/fonts/poppins";

export const fonts = css`
  @font-face {
    font-family: "Poppins Thin";
    src:
      url(${PoppinsThinWoff}) format("woff"),
      url(${PoppinsThinTtf}) format("truetype"),
      url(${PoppinsThinEot}) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins Regular";
    src:
      url(${PoppinsRegularEot}) format("embedded-opentype"),
      url(${PoppinsRegularWoff}) format("woff"),
      url(${PoppinsRegularTtf}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins Medium";
    src:
      url(${PoppinsMediumWoff}) format("woff"),
      url(${PoppinsMediumTtf}) format("truetype"),
      url(${PoppinsMediumEot}) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins SemiBold";
    src:
      url(${PoppinsSemiBoldWoff}) format("woff"),
      url(${PoppinsSemiBoldTtf}) format("truetype"),
      url(${PoppinsSemiBoldEot}) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins Bold";
    src:
      url(${PoppinsBoldWoff}) format("woff"),
      url(${PoppinsBoldTtf}) format("truetype"),
      url(${PoppinsBoldEot}) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter Thin";
    src:
      url(${InterThinWoff}) format("woff"),
      url(${InterThinTtf}) format("truetype"),
      url(${InterThinOtf}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter Regular";
    src:
      url(${InterRegularWoff}) format("woff"),
      url(${InterRegularTtf}) format("truetype"),
      url(${InterRegularOtf}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter Medium";
    src:
      url(${InterMediumWoff}) format("woff"),
      url(${InterMediumTtf}) format("truetype"),
      url(${InterMediumOtf}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter SemiBold";
    src:
      url(${InterSemiBoldWoff}) format("woff"),
      url(${InterSemiBoldTtf}) format("truetype"),
      url(${InterSemiBoldOtf}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter Bold";
    src:
      url(${InterBoldWoff}) format("woff"),
      url(${InterBoldTtf}) format("truetype"),
      url(${InterBoldOtf}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const PoppinsThin = "'Poppins Thin', sans-serif";
export const PoppinsRegular = "'Poppins Regular', sans-serif";
export const PoppinsMedium = "'Poppins Medium', sans-serif";
export const PoppinsSemiBold = "'Poppins SemiBold', sans-serif";
export const PoppinsBold = "'Poppins Bold', sans-serif";

export const InterThin = "'Inter Thin', sans-serif";
export const InterRegular = "'Inter Regular', sans-serif";
export const InterMedium = "'Inter Medium', sans-serif";
export const InterSemiBold = "'Inter SemiBold', sans-serif";
export const InterBold = "'Inter Bold', sans-serif";
