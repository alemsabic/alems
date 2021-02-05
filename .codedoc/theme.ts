import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#cccccc',           // --> CSS color string, background of the page
    text: '#3720ea',            // --> CSS color string, color of text
    primary: '#3720ea',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#cccccc',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: '#3720ea',               // --> CSS color string, border colors
    code: '#3720ea',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#000000',           // --> CSS color string, background of the page
    text: '#69f0ae',              // --> CSS color string, color of text
    primary: '#69f0ae',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#000000',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: '#69f0ae',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  }
});
