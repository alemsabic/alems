import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: 'rgba(255,208,8)',       // --> CSS color string, background of the page
    text: 'rgba(34,34,34)',            // --> CSS color string, color of text
    primary: '#6653ff',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(255,255,255,0.85)',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(34,34,34,0.4)',            // --> CSS color string, border colors
    code: 'rgba(34,34,34)',                  // --> CSS color string, in-text code color
  },

  dark: {
    background: 'rgba(34,34,34)',          // --> CSS color string, background of the page
    text: 'rgba(105,240,174,1)',              // --> CSS color string, color of text
    primary: '#F2B035',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#222',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(105,240,174,0.4)',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: 'rgba(34,34,34)',
      text: '#69f0ae', 
      border: 'rgba(105,240,174,0.4)',
    },

    light: {
      background: 'rgba(255,208,8)',
      text: 'rgba(34,34,34)',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(255,208,8,0.5)',              // --> CSS color string, background of ToC
      border: 'rgba(34,34,34,0.2)',                 // --> CSS color string, border of ToC
    },

    dark: {
      background: 'rgba(34,34,34,0.5)',             // --> CSS color string, background of ToC
      border: 'rgba(105,240,174,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
