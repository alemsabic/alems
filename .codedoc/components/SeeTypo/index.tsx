import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypo(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/govor_ulice/blob/master/docs/md"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <p><b>Briši ba greške!</b> Ako nađeš grešku (a grešaka more), <a href={href}>onda dotjeraj malo stranicu</a>. Hvala.</p> 
}

export const SeeTypo$ = transport(SeeTypo);