import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    muted: {
      text?: string;
      background: string;
    };
  }
  interface PaletteOptions {
    muted?: {
      text?: string;
      background: string;
    };
  }
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
}

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e86de",
      light: "#5ea3f2",
      dark: "#1b63b3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ff497c",
      light: "#ff6f98",
      dark: "#d93466",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    muted: {
      background: "#F3F4F6",
    },
    text: {
      primary: "#1f2937",
      secondary: "#4b5563",
    },
    success: {
      main: "#22c55e",
    },
    warning: {
      main: "#facc15",
    },
    error: {
      main: "#ef4444",
    },
    info: {
      main: "#3b82f6",
    },
    divider: "#e5e7eb",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2e86de",
      light: "#5ea3f2",
      dark: "#1b63b3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ff497c",
      light: "#ff6f98",
      dark: "#d93466",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    muted: {
      background: "#252833",
    },
    text: {
      primary: "#f9fafb",
      secondary: "#d1d5db",
    },
    success: {
      main: "#4ade80",
    },
    warning: {
      main: "#facc15",
    },
    error: {
      main: "#f87171",
    },
    info: {
      main: "#60a5fa",
    },
    divider: "#2d3748",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
