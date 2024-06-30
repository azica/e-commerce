export declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading7: React.CSSProperties;
    fontFamily?: {
      interRegular: string;
      interMedium: string;
      interSemiBold: string;
      interBold: string;
    };
  }

  interface TypographyVariantsOptions {
    heading7?: React.CSSProperties;
    fontFamily?: {
      interRegular: string;
      interMedium: string;
      interSemiBold: string;
      interBold: string;
    };
  }

  interface PaletteOptions {
    black?: PaletteOptions["black"];
  }
}

// Update the Typography's variant prop options
export declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading7: true;
    fontFamily?: true;
  }
}
