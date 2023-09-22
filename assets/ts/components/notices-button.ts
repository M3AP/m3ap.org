import m from 'mithril'
//@ts-ignore
import Button from './button.ts'

const {div} =
require('hyperscript-helpers')(m);

var page = {
    view: function(vnode) {
        return div('.comp.notices-button',m(Button,{
            href:"/legal-notices",
            theme:".dark",
            name:"Legal Notices"
        }))
    }
}

export default page;