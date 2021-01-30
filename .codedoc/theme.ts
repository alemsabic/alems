import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#dddddd',           // --> CSS color string, background of the page
    text: '#6653ff',            // --> CSS color string, color of text
    primary: '#6653ff',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#dddddd',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: '#b1abe0',               // --> CSS color string, border colors
    code: '#6653ff',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#000000',           // --> CSS color string, background of the page
    text: '#69f0ae',              // --> CSS color string, color of text
    primary: '#69f0ae',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#000000',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: '#315f48',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  }
});
