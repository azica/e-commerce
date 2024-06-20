import { createTheme } from "@mui/material";

import { red, white, black, neutral02, neutral07, neutral04, neutral03 } from "styles/colors";
import { PoppinsRegular, PoppinsMedium, InterRegular } from "styles/fonts";

import { rgba } from "./mixins";

export const theme = createTheme({
  typography: {
    heading7: {
      fontSize: "20px",
      lineHeight: "28px",
      fontFamily: `${PoppinsMedium}!important`,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heading7: "p",
        },
      },
      styleOverrides: {
        root: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "normal",
        },
        h1: {
          fontSize: "80px !important",
          lineHeight: "84px !important",
          fontFamily: PoppinsMedium,
          letterSpacing: "-3px",
        },
        h2: {
          fontSize: "72px",
          lineHeight: "76px",
          fontFamily: PoppinsMedium,
          letterSpacing: "-2px",
        },
        h3: {
          fontSize: "54px",
          lineHeight: "58px",
          fontFamily: PoppinsMedium,
          letterSpacing: "-1px",
        },
        h4: {
          fontSize: "40px",
          lineHeight: "44px",
          fontFamily: PoppinsMedium,
          letterSpacing: "0.4px",
        },
        h5: {
          fontSize: "34px",
          lineHeight: "38px",
          fontFamily: PoppinsMedium,
          letterSpacing: "-0.6px",
        },
        h6: {
          fontSize: "28px",
          lineHeight: "35px",
          fontFamily: PoppinsMedium,
          letterSpacing: "-0.6px",
        },
        body1: {
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: 0,
        },
        body2: {
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: 104,
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          background: "transparent",
          padding: "8px 0",
          lineHeight: "28px",
          fontSize: "16px",
          fontFamily: "Intel, sans-serif",
          border: "none",
          borderBottom: `1px solid ${neutral03}`,
          color: neutral04,
          transition: "all .4s ease",

          "&:hover": {
            transition: "all .4s ease",
            borderBottom: `1px solid ${neutral07}`,

            ".MuiOutlinedInput-notchedOutline": {
              boxShadow: "none",
            },
          },

          "&.Mui-focused": {
            background: "transparent",
            borderBottom: `1px solid ${neutral07}`,

            ".MuiOutlinedInput-input": {
              "&:-internal-autofill-selected, &:-internal-autofill-previewed": {
                backgroundColor: `${white}`,
                WebkitBoxShadow: `0 0 0px 1000px ${white} inset`,
              },
            },
          },

          "&.Mui-error": {
            borderBottom: `1px solid rgba(${red}, 0.7)`,

            "&.Mui-focused": {
              borderBottom: `1px solid ${red}`,
            },
          },

          "&.Mui-disabled": {
            pointerEvents: "none",
          },

          "&.MuiInputBase-adornedStart": {
            svg: {
              // fill: "#121212",
              marginRight: 8,
              height: 24,
              width: 28,
            },
          },

          "&.MuiInputBase-readOnly": {
            pointerEvents: "none",
          },

          ".MuiSelect-icon": {
            top: "calc(50% - .7em)",
            width: "25px",
            height: "25px",
            color: neutral07,
          },
        },

        notchedOutline: {
          border: "none",
          boxShadow: "0px 0px 6px transparent, inset 0px 0px 0px 1px transparent",
          transition: "all 0.25s ease-in-out",
        },

        input: {
          fontFamily: InterRegular,
          fontSize: "16px",
          lineHeight: "26px",
          color: neutral04,
          padding: 0,
          transition: "all 0.25s ease-in-out",
          background: "transparent",

          "&::placeholder": {
            opacity: 1,
            color: neutral04,
          },

          "&:-internal-autofill-selected, &:-internal-autofill-previewed": {
            backgroundColor: "transparent !important",
            WebkitBoxShadow: `0 0 0px 1000px ${neutral02} inset`,
            color: `${neutral07} !important`,
          },

          "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
            backgroundColor: "transparent !important",
            WebkitBoxShadow: `0 0 0px 1000px ${neutral02} inset`,
            transition: "all 0.25s ease-in-out 0s",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: InterRegular,
          fontSize: 12,
          lineHeight: "100%",
          transform: "translate(12px, 15px) scale(1)",
          maxWidth: "calc(100% - 24px)",

          "&.Mui-focused": {
            opacity: 0,

            ".MuiFormLabel-asterisk": {
              opacity: 0,
            },
          },

          "&.Mui-disabled": {
            opacity: 0.8,

            ".MuiFormLabel-asterisk": {
              opacity: 0,
            },
          },
        },
        shrink: {
          transform: "translate(12px, 8px) scale(.85)",

          "+ .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            transform: "translateY(2px)",
          },
        },
        asterisk: {
          color: red,
          transition: "all 0.25s ease-in-out",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: PoppinsRegular,
          fontSize: 12,
          lineHeight: "140%",
          color: black,
          margin: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "all 0.25s ease-in-out",
          position: "absolute",
          bottom: -20,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          width: "100%",

          "&.Mui-error": {
            color: red,
            opacity: 1,
            pointerEvents: "auto",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingRight: "20px !important",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: 12,
          marginTop: 8,

          "&.select": {
            "&::-webkit-scrollbar": {
              width: "6px",
              right: "2px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: rgba(neutral02, 0.5),
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: neutral02,
            },
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(45, 49, 60, 0.25)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            marginTop: 0,
            borderRadius: 0,
            padding: "40px 24px",
            maxWidth: "415px",
          },
        },
      },
    },
  },
});
