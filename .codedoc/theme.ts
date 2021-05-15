import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: 'rgba(221,221,221)',       // --> CSS color string, background of the page
    text: 'rgba(68,68,68)',            // --> CSS color string, color of text
    primary: '#3647a4',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(255,255,255,0.7)',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(68,68,68,0.2)',            // --> CSS color string, border colors
    code: 'rgba(68,68,68)',                  // --> CSS color string, in-text code color
  },

  dark: {
    background: 'rgba(68,68,68)',          // --> CSS color string, background of the page
    text: 'rgba(105,240,174,1)',              // --> CSS color string, color of text
    primary: 'rgba(203,94,59,1)',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#333',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(105,240,174,0.4)',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: 'rgba(68,68,68)',
      text: '#69f0ae', 
      border: 'rgba(105,240,174,0.4)',
    },

    light: {
      background: 'rgba(198,198,198)',
      text: 'rgba(68,68,68)',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(221,221,221,0.5)',              // --> CSS color string, background of ToC
      border: 'rgba(68,68,68,0.2)',                 // --> CSS color string, border of ToC
    },

    dark: {
      background: 'rgba(68,68,68,0.5)',             // --> CSS color string, background of ToC
      border: 'rgba(105,240,174,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
