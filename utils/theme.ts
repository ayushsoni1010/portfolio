import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "280px",
  sm: "429px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, breakpoints });
export default theme;
