import m from 'mithril'
//@ts-ignore
import { canUseWebP, isMobile, addScrollCheck } from '../utils.ts';
//@ts-ignore
import Button from '../components/button.ts'
//@ts-ignore
import Navibar from '../components/navibar.ts'
//@ts-ignore
import NoticesButtons from '../components/notices-button.ts'
//@ts-ignore
import Logo_big_dark from '../../img/Logo_big.svg';

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr,span} =
require('hyperscript-helpers')(m);

var webp = " no-webp ";
var mobile = " no-mobile "

if(canUseWebP()){
    webp = " webp ";
}

if(isMobile()){
    mobile = " mobile ";
}

var page = {
    view: function() {
        return div('.home .background'+ webp + mobile,
        {
            oncreate: function(vnode) {
                window.scrollTo (0,0);
                var navibar = document.querySelector(".navibar");
                var splash = document.querySelector(".splash");
                var logo = document.querySelector(".logo");
                addScrollCheck(navibar,"scroll",10);
                addScrollCheck(splash,"scroll",10);
            }
        },[
//          a({rel:'me',href:'', style:'display:none'},'Mastodon'),
            div('.splash',[
                div('.logo',m.trust(Logo_big_dark)),
                div('.row',[
                    m(Button,{
                        newtab: true,
                        href:"https://tech.lgbt/@filipe_mdsr",
                        icon: ".fab",
                        theme:".instagram"
                    }),
                    m(Button,{
                        newtab: true,
                        href:"https://github.com/FilipeRamalho",
                        icon: ".fab",
                        theme:".mastodon"
                    }),
                    m(Button,{
                        newtab: true,
                        href:"https://github.com/FilipeRamalho",
                        icon: ".fab",
                        theme:".twitter"
                    })
                ]),
                div('.row',[
                    div('.comp.mouse')
                ]),
            ]),
            m(Navibar),
            m(NoticesButtons),
            div('.content',[])
        ])
    }
}


export default page;