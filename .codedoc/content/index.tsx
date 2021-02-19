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
html {font-size: 100%;}
body {line-height: 1.8;}
h2 {line-height:1.1;}
h3 {line-height:1.1;}
h1 {line-height:1.1; text-transform:uppercase;}
h1{font-size: calc(1.3rem + 1.8vw);}
h2 {font-size: calc(1.15rem + 1.2vw);}
h3 {font-size: calc(0.9rem + 0.7vw);}
.container .text-0-0-4 p, div.source-0-0-5, .content-0-0-13 p, .text, .container p, .container ol, .container ul {font-size: calc(0.9rem + 0.3vw);}
.container blockquote p {font-size: calc(0.85rem + 0.2vw);}
.contentnav-0-0-15 {font-size: calc(0.7rem + 0.3vw);}
sup {font-size:0.75em;}
.inside .icon-font {font-size:36px;}
a.icon-font {
  opacity: 0.35;
}
a.icon-font:hover {
  opacity: 1;
  text-decoration: none !important;
}
`}
</style>

<style>
{`
.collapse-0-0-9 > .content {border-left:1px solid rgba(17,17,17,0.2);}
body.dark .collapse-0-0-9 > .content {border-left:1px solid rgba(105,240,174,0.2);}
.contentnav-0-0-9 {
  border-left: 1px solid;
}
.footnotes-0-0-16:before {
 content: ""; 
 display: block;
 width: 10%;
 padding-top: 12px;
 border-top: 1px solid;
}
ol {
 counter-reset: cupcake;
 padding-left: 1.6em;
 list-style: none;
}
ol li {
 counter-increment: cupcake;
}
ol li strong {
 font-weight: 400;
 color: #3720ea;
}
body.dark ol li strong {
 color: #c994c7;
}
ol ol li strong {
 font-weight: 700;
 color: #111111;
}
body.dark ol ol li strong {
 color: #69f0ae;
}
ol li strong:before {
 content: "‖ ";
 color: #111;
 padding-left: .4em;
 white-space: nowrap;
}
body.dark ol li strong:before {
 color: #69f0ae;
}
ol ol li strong:before {
 content: "";
 padding-left: 0;
}
ol li strong:after {
 padding-right: 0.4em;
 content: "";
 white-space: nowrap;
}
ol ol li strong:after {
 padding-right: 0;
 content: " ";
}
ol li:before {
 position: absolute;
 content: counters(cupcake, '.') '.';
 margin-left: -1.5em;
 color: #3720ea;
}
ol ol {
 padding-left: 1.5em;
}
ol ol li:before {
 position: absolute;
 content: "☆ ";
 margin-left: -1.5em;
}
body ol li:before, body sup a, body .footnotes-0-0-16 b {
 color: #3720ea;
}
body.dark ol li:before, body.dark sup a, body.dark .footnotes-0-0-16 b {
 color:#c994c7;
}
`}
</style>

      {_content}
      <ContentNav content={_content}/>
    </Page>
  )
}
