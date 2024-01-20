import * as m from "mithril";
import Navbar from "./Navbar";

const {div} = require("hyperscript-helpers")(m);

interface  Attrs {
    login: boolean
    css?: string
}

const PageTemplate: m.Component<Attrs> = {
    view(vnode: m.Vnode<Attrs>) {
        div('.'+(vnode.attrs.css ?? ""), [m(Navbar), vnode.children])
    }
}

export default PageTemplate;
