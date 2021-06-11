import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: 'rgba(255,252,131)',       // --> CSS color string, background of the page
    text: 'rgba(85,85,85)',            // --> CSS color string, color of text
    primary: 'rgba(160,150,241)',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(255,255,255,0.85)',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(85,85,85,0.4)',            // --> CSS color string, border colors
    code: 'rgba(85,85,85)',                  // --> CSS color string, in-text code color
  },

  dark: {
    background: 'rgba(85,85,85)',          // --> CSS color string, background of the page
    text: 'rgba(105,240,174,1)',              // --> CSS color string, color of text
    primary: '#eeba5a',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#222',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(105,240,174,0.4)',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: 'rgba(85,85,85)',
      text: '#69f0ae', 
      border: 'rgba(105,240,174,0.4)',
    },

    light: {
      background: 'rgba(255,252,131)',
      text: 'rgba(85,85,85)',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(255,252,131,0.75)',              // --> CSS color string, background of ToC
      border: 'rgba(85,85,85,0.2)',                 // --> CSS color string, border of ToC
    },

    dark: {
      background: 'rgba(85,85,85,0.75)',             // --> CSS color string, background of ToC
      border: 'rgba(105,240,174,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
