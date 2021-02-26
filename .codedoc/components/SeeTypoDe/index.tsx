import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypoDe(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/alemsorg/blob/master/docs/md"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <blockquote><p><span class="icon-font" data-ignore-text="" style="vertical-align: sub">create</span> <strong>FEHLER? UNMÖGLICH! :-)</strong></p><p>Wenn du Fehler siehst, und deren gibt's zuhauf, dann kannst du sie <a href={href}>hier berichtigen</a>. Vielen Dank dafür.</p></blockquote>

}

export const SeeTypoDe$ = transport(SeeTypoDe);