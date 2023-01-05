import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "#0B0D17",
      pink: "#D0D6F9",
    },
  },
});

export const globalStyles = globalCss({
  "*": { boxSizing: "border-box", margin: 0, padding: 0 },
  body: { fontFamily: "Barlow Condensed" },
});
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
