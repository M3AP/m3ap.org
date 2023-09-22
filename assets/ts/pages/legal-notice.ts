import m from 'mithril'
//@ts-ignore
import { canUseWebP, isMobile, addScrollCheck } from '../utils.ts';
//@ts-ignore
import Navibar from '../components/navibar.ts'

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
        return div('.contact .background'+ webp + mobile,{
            oncreate: function(vnode) {
                window.scrollTo (0,0);
            }
        },[
            m(Navibar),
            div('.content',[
                h1('.title','Legal Notices'),
                p('.bold','The following information (Impressum) is required under German law.'),
                p('Filipe Ramalho'),
                p('Adress:'),
                p('E-Mail:'),
                p(''),
            ])
        ])
    }
}


export default page;