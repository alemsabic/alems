import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#fffd83',           // --> CSS color string, background of the page
    text: '#333',            // --> CSS color string, color of text
    primary: '#333',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#fffd83',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(0,0,0,0.2)',               // --> CSS color string, border colors
    code: '#333',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#333',           // --> CSS color string, background of the page
    text: '#eee',              // --> CSS color string, color of text
    primary: '#eee',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#333',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(255,255,255,0.2)',      // --> CSS color string, border colors
    code: '#eee',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: '#333',
      text: '#eee', 
      border: 'rgba(255,255,255,0.2)',
    },
    light: {
      background: '#fffd83',
      text: '#333',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(255,253,131,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.2)',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: 'rgba(52,51,51,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
