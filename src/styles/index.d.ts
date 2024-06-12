export declare module '@mui/material/styles' {
    interface TypographyVariants {
        heading7: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        heading7?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
export declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        heading7: true;
    }
}