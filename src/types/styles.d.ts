export interface COLORS {
  white: string;
  black: string;
  offblack: string;
  gray: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  primary: string;
  secondary: string;
  orange: string;
  green: string;
  urgent: string;
  backdrop: string;
  formInput: string;
  adminSidebar: string;
}

export interface WEIGHTS {
  light: number;
  normal: number;
  bold: number;
  heavy: number;
}

export interface BREAKPOINTS {
  tabletMin: number;
  laptopMin: number;
  desktopMin: number;
  ultrawideMin: number;
}

export interface QUERIES {
  tabletAndUp: string;
  laptopAndUp: string;
  desktopAndUp: string;
  ultrawideAndUp: string;
  tabletOnly: string;
}

export interface FAMILIES {
  serif: string;
  sansSerif: string;
}

export interface THEME {
  queries: QUERIES;
  colors: COLORS;
}
