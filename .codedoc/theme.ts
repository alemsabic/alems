import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#fffd83',           // --> CSS color string, background of the page
    text: '#555',            // --> CSS color string, color of text
    primary: '#9d9dd8',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#fffd83',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(0,0,0,0.2)',               // --> CSS color string, border colors
    code: '#555',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#555',           // --> CSS color string, background of the page
    text: '#eee',              // --> CSS color string, color of text
    primary: '#b4a142',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#555',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(255,255,255,0.2)',      // --> CSS color string, border colors
    code: '#eee',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: '#555',
      text: '#eee', 
      border: 'rgba(255,255,255,0.2)',
    },
    light: {
      background: '#fffd83',
      text: '#555',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(255,253,131,0.6)',             // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.2)',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: 'rgba(85,85,85,0.6)',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
