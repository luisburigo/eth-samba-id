import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { breakpoints } from './breakpoints';

const defaultTheme = extendTheme({
  initialColorMode: "dark",
  colors,
  breakpoints
});

export { defaultTheme };
