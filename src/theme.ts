"use client";
import { alpha, createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 16,
  },
  palette: {
    primary: {
      main: "#00ADB5",
      contrastText: "#EEEEEE",
    },
    secondary: {
      main: alpha("#393E46", 0.75),
    },
    text: {
      primary: "#EEEEEE",
      secondary: "#00ADB5",
      disabled: alpha("#EEEEEE", 0.75),
    },
    background: {
      default: "#222831",
      paper: alpha("#393E46", 0.5),
    },
    divider: alpha("#EEEEEE", 0.1),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(4px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "18px",
          padding: "10px 32px",
          lineHeight: "1.5",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
          boxShadow: "none",
        },
        text: {
          color: "#EEEEEE",
          borderRadius: 0,
          fontWeight: "normal",
          textShadow: "none",
          padding: "10px",
          "&:hover": {
            color: "#00ADB5",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
          transition: "color 0.3s ease",
          ":hover": {
            color: "#00ADB5",
          },
          "&.active": {
            color: "#00ADB5",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "48px",
          height: "48px",
          backgroundColor: "#393E46",
          color: alpha("#EEEEEE", 0.75),
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
          borderRadius: "16px",
          backgroundColor: alpha("#393E46", 0.5),
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#393E46",
          },
          "&.Mui-focused": {
            backgroundColor: "#393E46",
            "&:after": {
              content: "none",
            },
          },
          "&:before": {
            content: "none",
          },
        },
        input: {
          padding: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "relative",
          fontWeight: "bold",
          color: "#EEEEEE",
          "&.Mui-focused": {
            color: "#00ADB5",
          },
          transform: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-poppins)",
    body1: {
      fontSize: "18px",
      lineHeight: "1.5",
    },
    h2: {
      fontSize: "64px",
      lineHeight: "1.5",
    },
  },
});

export default theme;
