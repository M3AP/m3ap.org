import m from 'mithril'
//@ts-ignore
import { canUseWebP } from '../utils.ts';
//@ts-ignore
import Button from '../components/button.ts'
//@ts-ignore
import Logo_big_white from '../../img/Logo_big_white.svg';

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
        return div('.comp.navibar .background .dark',[
            a('.logo',{href:"#!/home"},div('.logo',m.trust(Logo_big_white))),
            m(Button,{
                href:"#!/contact",
                theme:".transparent",
                name:"Who are we?"
            }),
            m(Button,{
                href:"#!/mission",
                theme:".transparent",
                name:"Mission"
            }),
            m(Button,{
                href:"#!/news",
                theme:".transparent",
                name:"News"
            }),
            m(Button,{
                href:"#!/facts",
                theme:".transparent",
                name:"Facts"
            })
        ])
    }
}

export default page;