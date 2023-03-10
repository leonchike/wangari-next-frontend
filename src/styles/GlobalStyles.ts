import { createGlobalStyle } from "styled-components";

import { COLORS, WEIGHTS, FAMILIES } from "./styleConstants";

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

main {
  width: 100%;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a[role="link"] {
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root, #__next {
  height: 100%;
}

/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-black: ${COLORS.black};
  --color-offblack: ${COLORS.offblack};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-900: ${COLORS.gray[900]};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};
  --color-green: ${COLORS.green};
  --color-orange: ${COLORS.orange};
  --color-urgent: ${COLORS.urgent};
  --color-backdrop: ${COLORS.backdrop};
  --color-form-input: ${COLORS.formInput};
  --color-sidebar: ${COLORS.adminSidebar}

  --font-weight-light: ${WEIGHTS.light};
  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-bold: ${WEIGHTS.bold};
  --font-weight-heavy: ${WEIGHTS.heavy};

  --font-family-serif: ${FAMILIES.serif};
  --font-family-sans-serif: ${FAMILIES.sansSerif};

  --large-body-padding: 2rem;
  --small-body-padding: 1rem;

  --masonry-spacing: calc(20 / 16 * 1rem);

  --border-radius: 2px;
  --form-padding: 10px;
  --normal-font-size: 1rem;

  --box-shadow:  0px 0px 0.4px rgba(0, 0, 0, 0.013),
    0px 0px 1px rgba(0, 0, 0, 0.017), 0px 0px 1.9px rgba(0, 0, 0, 0.014),
    0px 0px 3.4px rgba(0, 0, 0, 0.008), 0px 0px 6.3px rgba(0, 0, 0, 0.012),
    0px 0px 15px rgba(0, 0, 0, 0.08);
  
}

body {
  font-family: var(--font-family-sans-serif);
  font-variation-settings: 'slnt' 0;
  --max-large-width: 1600px;
  --max-collections-width: calc(10000 / 16 * 1rem);
  color: var(--color-offblack);
}

/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

/*
  Changing the default link styles to match the design
*/

::selection {
  color: var(--color-white);
  background: var(--color-offblack); /* WebKit/Blink Browsers */
}
::-moz-selection {
  color: var(--color-white);
  background: var(--color-offblack); /* Gecko Browsers */
}

`;

export default GlobalStyles;
