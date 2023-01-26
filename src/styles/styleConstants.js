export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  black: "hsl(0deg 0% 0%)",
  offblack: "hsl(24deg 5% 6%)",
  gray: {
    100: "hsl(185deg 5% 95%)",
    300: "hsl(190deg 5% 80%)",
    500: "hsl(196deg 4% 60%)",
    700: "hsl(220deg 5% 40%)",
    900: "hsl(220deg 3% 20%)",
  },
  primary: "hsl(267deg 45% 59%)",
  secondary: "hsl(240deg 60% 63%)",
  orange: "hsl(30deg 100% 60%)",
  green: "hsl(119, 54%, 47%)",
  urgent: "hsl(0deg 55% 54%)",
  backdrop: "hsl(220deg 5% 40% / 0.8)",
  formInput: "hsl(0deg 0% 91.4%)",
};

export const WEIGHTS = {
  light: 300,
  normal: 400,
  bold: 700,
  heavy: 900,
};

export const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  serif: "Georgia, serif",
  sansSerif:
    'Lato, Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};

export const THEME = {
  queries: QUERIES,
  colors: COLORS,
};
