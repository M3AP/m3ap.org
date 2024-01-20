import * as m from "mithril";
import PageTemplate from "../components/PageTemplate";
import style from "/assets/css/pages/legal.module.css"

const {div,p,h1} =
require('hyperscript-helpers')(m);


const page: m.Component = {
    view: function() {
        return m(PageTemplate,[
            div('.'+style.page,[
                h1('Legal Notices'),
                p('The following information (Impressum) is required under German law.'),
                p('Filipe Manuel De Sousa Ramalho'),
                p('Address:'),
                p('E-Mail:'),
            ])
        ])
    }
}


export default page;