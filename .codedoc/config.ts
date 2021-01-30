
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                           // --> add the theme. modify `./theme.ts` for chaning the theme.
  src: {                                 // @see /docs/config/entry
    base: 'md',                     // --> the base folder for all markdowns
    toc: '_toc.md',                      // --> markdown file for toc, relative to `base`
    pick: /\.md$/,                       // --> which files to pick (default: .md files)
    drop: /(^_)|(\/_)/,                  // --> which files to drop (default: _something.md files)
  },

  page: {
    title: {
      base: 'Hier steht der Titel'                   // --> the base title of your doc pages
    }
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
