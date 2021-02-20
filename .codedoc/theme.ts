import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#ff0',           // --> CSS color string, background of the page
    text: '#111111',            // --> CSS color string, color of text
    primary: '#111111',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#ff0',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(17,17,17,0.2)',               // --> CSS color string, border colors
    code: '#111111',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#000000',           // --> CSS color string, background of the page
    text: '#eee',              // --> CSS color string, color of text
    primary: '#eee',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#000000',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(255,255,255,0.2)',      // --> CSS color string, border colors
    code: '#eee',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: '#000',
      text: '#eee', 
      border: 'rgba(255,255,255,0.2)',
    },
    light: {
      background: '#ff0',
      text: '#111',
      border: 'rgba(17,17,17,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: '#ff0',             // --> CSS color string, background of ToC
      border: 'rgba(17,17,17,0.2)',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: '#000000',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
