import * as m from "mithril";
import { canUseWebP } from '../utils';

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}

function route(url,newtab) {
    if(url.startsWith("http")){
        if(newtab){
            window.open(url, '_blank');
        }else{
            window.location.href = url;
        }
    }else{
        m.route.set(url);
    }
}

/*
* @param newtab
* @param href
* @param icon
* @param name
*/
var page = {
    view: function(vnode) {
        let button_class = vnode.attrs.theme
        var content;
        if(vnode.attrs.name != null && vnode.attrs.icon == null){
            content = [
                div('.name text light',vnode.attrs.name)]
        }else if(vnode.attrs.icon != null && vnode.attrs.name != null){
            button_class += vnode.attrs.icon;
            content = [
                div('.icon',[i()]),
                div('.name .text .light',vnode.attrs.name)]
        }else if(vnode.attrs.icon != null && vnode.attrs.name == null){
            button_class += vnode.attrs.icon;
            content = [
                div('.icon-alone .icon',[i()])]
        }
        return button(button_class,{
            onclick: function(e){
                route(vnode.attrs.href,vnode.attrs.newtab);
            }
        },content)
    }
}

export default page;