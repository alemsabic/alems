
import { configuration,
  DefaultMarkdownCustomComponents
 } from '@codedoc/core';

import { theme } from './theme';

import { Utterances } from './components/utterances';
import { SeeTypo$ } from './components/SeeTypo';
import { SeeTypoDe$ } from './components/SeeTypoDe';



import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin


import { StaticRenderer } from '@connectv/sdh';    // --> import a static renderer for easily creating the script elements
import register from 'jsdom-global';               // --> also lets create a global document object for that purpose


const renderer = new StaticRenderer();             // --> initialize renderer
register();                                        // --> register global document object

export const config = /*#__PURE__*/configuration({
  theme,                           // --> add the theme. modify `./theme.ts` for chaning the theme.
  page: {                                // @see /docs/config/page
    title: {
      base: 'Alems.org',
      connector: ' > ',
    },
      meta: {                              // --> meta tags of each page
      subject: 'Sarajevski žargon',           // --> the subject meta tag for each page
      description: 'Stranica Alema Šabića. Uz pomoć nekih drugih budala.',          // --> description meta tag for each page
      keywords: ['test','test', 'text'],                        
      themeColor: '#007',             // --> the browser bar color of your docs
      appleMobileWebStatusBarStyle:      // --> same as above, but for iOS Safari
        'black-translucent',
    },
    scripts: [
      <link rel="manifest" href="/site.webmanifest"/>,
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>,
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>,
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>,
    ],
    fonts: {                             // --> font settings
      text: {                            // --> font used for texts
        url:                             // --> URL of font used for texts
          'https://fonts.googleapis.com/css2?family=Hind:wght@400;700&display=swap',
        name: 'Hind',                    // --> name of font used for texts
        fallback: 'sans-serif'           // --> the fallback font for texts
      },
      code: {                            // --> font used for codes
        url:                             // --> URL of font used for codes
          'https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400&display=swap',
        name: 'Source Code Pro',         // --> name of the font used for codes
        fallback:                        // --> fallback font for codes
          `'Courier New', Courier, monospace`
      },
      icon: {                            // --> the icon font
        url:                             // --> url of hte icon font (and perhaps the outline icon font)
          'https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined',
        name: 'Material Icons',          // --> name of the icon font
        outline:                         // --> name of the outline icon font
          'Material Icons Outlined'
      }
    },                     
    stylesheets: [
      <meta name="robots" content="noindex"/>,
    ],                     
    post: [
    ],                            
  },

dest: {
  namespace: '',
  html: 'dist',
  assets: 'dist',
},
misc: {
  github: {
    user: 'alemsabic',            // --> name of the user on GitHub owning the repo
    repo: 'alemsorg',         // --> name of the repo on GitHub
    action: 'Issue',            // --> action of the GitHub button
    count: true,                // --> whether to show the `count` on the GitHub button
    //large: true,                // --> whether to show a `large` GitHub button
    standardIcon: true,         // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
  },
  gitter: {
    room: 'alems-org/community'  // --> id of the Gitter room for the project
  }
},
markdown: {
  customComponents: {
    ...DefaultMarkdownCustomComponents,
    Utterances,
    SeeTypo$,
    SeeTypoDe$
  }
},

plugins: [
  codingBlog() 
],

});
