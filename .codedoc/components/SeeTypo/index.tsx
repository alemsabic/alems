import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypo(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/alemsorg/blob/master/docs/md"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <p>Ako nađeš grešku (a grešaka more) ili ako šta fali (a kako da ne fali?), onda možeš ovdje da <a href={href}> dotjeraš stranicu</a>. Hvala ti puno.</p> 
}

export const SeeTypo$ = transport(SeeTypo);