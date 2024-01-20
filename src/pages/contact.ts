import * as m from "mithril";
import PageTemplate from "../components/PageTemplate";
import NoticesButton from "../components/LegalButton";

const {div,p,h1} =
    require('hyperscript-helpers')(m);


const page: m.Component = {
    view: function() {
        return m(PageTemplate,[
            div([
                m(NoticesButton)
            ])
        ])
    }
}


export default page;