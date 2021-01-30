
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                           // --> add the theme. modify `./theme.ts` for chaning the theme.
  page: {                                // @see /docs/config/page
    title: {
      base: 'Codedoc',
    },

    meta: {                              // --> meta tags of each page
      subject: 'test'      ,           // --> the subject meta tag for each page
      description: 'testertoni'   ,          // --> description meta tag for each page
      keywords: [],                      // --> a list of SEO keywords
      themeColor: '#000000',             // --> the browser bar color of your docs
      appleMobileWebStatusBarStyle:      // --> same as above, but for iOS Safari
        'black-translucent',
    },

  },


dest: {
  namespace: '',
  html: 'dist',
  assets: 'dist',
},

misc: {
  github: {
    user: 'alemsabic',            // --> name of the user on GitHub owning the repo
    repo: 'ala',         // --> name of the repo on GitHub
    action: 'Issue',            // --> action of the GitHub button
    count: true,                // --> whether to show the `count` on the GitHub button
    large: true,                // --> whether to show a `large` GitHub button
    standardIcon: true,         // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
  },
  //...
},




});
