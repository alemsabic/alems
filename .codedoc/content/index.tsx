import { RendererLike } from '@connectv/html';
import { File } from 'rxline/fs';
import { Page, Meta, ContentNav, Fonts, ToC, GithubSearch$ } from '@codedoc/core/components';

import { config } from '../config';
import { Header } from './header';
import { Footer } from './footer';


export function content(_content: HTMLElement, toc: HTMLElement, renderer: RendererLike<any, any>, file: File<string>) {
  return (
    <Page title={config.page.title.extractor(_content, config, file)}
          favicon={config.page.favicon}
          meta={<Meta {...config.page.meta}/>}
          fonts={<Fonts {...config.page.fonts}/>}
          scripts={config.page.scripts}
          stylesheets={config.page.stylesheets}
          header={<Header {...config}/>}
          footer={<Footer {...config}/>}
          toc={
            <ToC default="open"
            search={
                  config.misc?.github ? 
                  <GithubSearch$
                    repo={config.misc.github.repo} 
                    user={config.misc.github.user}
                    root={config.src.base}
                    pick={config.src.pick.source}
                    drop={config.src.drop.source}
                  /> : false
            }>{toc}</ToC>
          }>

<style>
{`
h2 {line-height:1.3; text-transform:uppercase;}
h3 {line-height:1.3; text-transform:uppercase;}
h1 {line-height:1.3; text-transform:uppercase; text-align:center;}

h1{font-size: calc(1.3rem + 1.8vw);}
h2 {font-size: calc(1.2rem + 1.1vw);}
h3 {font-size: calc(0.9rem + 0.7vw);}
.container p, .container ol, .container ul {font-size: calc(0.9rem + 0.15vw);}

.content-0-0-9 { 
/* this will hide the scrollbar in mozilla based browsers */
overflow: -moz-scrollbars-none;
/* this will hide the scrollbar in internet explorers */
-ms-overflow-style: none;
}

.content-0-0-9::-webkit-scrollbar { 
  width: 0 !important;
  display: none; 
}

.container {line-height:1.8;}
.inside a.icon-font {font-size:36px;}
.inside a.icon-font {
  opacity: 0.35;
}
.inside a.icon-font:hover {
  opacity: 1;
  text-decoration: none !important;
}
`}
</style>

<style>
{`

body.dark img {
  opacity: 0.7;
}
code {
  background: #ecea2b;
}
body.dark code {
  background: #2f2f8e;
}
ol {
 counter-reset: cupcake;
 padding-left: 1.6em;
 list-style: none;
}
ol li {
 counter-increment: cupcake;
}
ol li strong:before {
 padding-left: .4em;
 white-space: nowrap;
}
ol li strong:after {
 padding-right: 0.4em;
 content: "";
 white-space: nowrap;
}
ol li:before {
 position: absolute;
 content: counter(cupcake) '.';
 margin-left: -1.5em;
 font-weight: 700;
}
ol ol {
 padding-left: 1.5em;
}
ol ol li:before {
 position: absolute;
 content: "▸ ";
 margin-left: -1.5em;
 font-weight:normal;
}
`}
</style>

      {_content}
      <ContentNav content={_content}/>
    </Page>
  )
}
