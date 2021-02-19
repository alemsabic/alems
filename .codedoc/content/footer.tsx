import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer, GitterToggle$} from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  let github$;
  if (config.misc?.github)
    github$ = <a class="icon icon-font" href={`https://www.alems.com/kontakt`} 
                target="_blank">perm_contact_calendar</a>;
  let community$;
  if (config.misc?.gitter)
  community$ = <GitterToggle$ room={config.misc.gitter.room} label='chat' icon={true}/>;
  if (github$ && community$) return <_Footer>{github$}<hr/>{community$}</_Footer>;
  else if (github$) return <_Footer>{github$}</_Footer>;
  else if (community$) return <_Footer>{community$}</_Footer>;
  else return <_Footer></_Footer>;
}
