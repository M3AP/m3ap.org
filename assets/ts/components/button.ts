import m from 'mithril'
//@ts-ignore
import { canUseWebP } from '../utils.ts';

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}

/*
* @param newtab
* @param href
* @param icon
* @param name
*/
var page = {
    view: function(vnode) {
        var target = "";
        var rel = "";
        if(vnode.attrs.newtab == true){
            target = "_blank"
            rel = "noopener noreferrer"
        }
        if(vnode.attrs.name != null && vnode.attrs.icon == null){
            return a(vnode.attrs.theme,{href:vnode.attrs.href,target:target,rel:rel},
                button(vnode.attrs.theme,{disabled:"true",'aria-disabled':"true"},[
                    div('.name text light',vnode.attrs.name)
                ])
            )
        }else if(vnode.attrs.icon != null && vnode.attrs.name != null){
            return a(vnode.attrs.theme,{href:vnode.attrs.href,target:target,rel:rel},
                button(vnode.attrs.theme+vnode.attrs.icon,{disabled:"true",'aria-disabled':"true"},[
                    div('.icon',[i()]),
                    div('.name .text .light',vnode.attrs.name)
                ])
            )
        }else if(vnode.attrs.icon != null && vnode.attrs.name == null){
            return a(vnode.attrs.theme,{href:vnode.attrs.href,target:target,rel:rel},
                button(vnode.attrs.theme+vnode.attrs.icon,{disabled:"true",'aria-disabled':"true"},[
                    div('.icon-alone .icon',[i()])
                ])
            )
        }
    }
}

export default page;