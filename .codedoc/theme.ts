import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#ff0',           // --> CSS color string, background of the page
    text: '#111111',            // --> CSS color string, color of text
    primary: '#111111',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#ff0',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: '#111111',               // --> CSS color string, border colors
    code: '#111111',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#000000',           // --> CSS color string, background of the page
    text: '#69f0ae',              // --> CSS color string, color of text
    primary: '#69f0ae',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#000000',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: '#69f0ae',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  },
  toc: {                                 
    light: {
      background: '#ff0',             // --> CSS color string, background of ToC
      border: '#111111',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: '#000000',             // --> CSS color string, background of ToC
      border: '#69f0ae',                // --> CSS color string, border of ToC
    },             
  },
});
