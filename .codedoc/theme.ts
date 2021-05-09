import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#FEF720',           // --> CSS color string, background of the page
    text: '#222',            // --> CSS color string, color of text
    primary: 'rgba(102,83,255,0.9)',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#FEF720',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(102,83,255,0.9)',               // --> CSS color string, border colors
    code: '#222',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#222',           // --> CSS color string, background of the page
    text: '#eee',              // --> CSS color string, color of text
    primary: 'rgba(105,240,174,0.9)',           // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#222',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(105,240,174,0.9)',      // --> CSS color string, border colors
    code: '#eee',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: '#222',
      text: '#eee', 
      border: 'rgba(255,255,255,0.2)',
    },
    light: {
      background: '#FEF720',
      text: '#222',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(254,247,32,0.6)',             // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.2)',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: 'rgba(34,34,34,0.6)',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
