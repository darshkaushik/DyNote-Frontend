import { extendTheme } from "@chakra-ui/react";
import "fontsource-aileron";
import "fontsource-cabin";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    light: "#F4F7F6",
    medium: "#0DBFBE",
    dark: "#041D2C",
    highlight: "#3EC7C2",
  },
};
const textStyles = {
  default: {
    fontFamily: "Aileron",
  },
  cabin: {
    fontFamily: "Cabin",
  },
};
export const theme = extendTheme({ colors, textStyles });
