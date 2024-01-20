import * as m from "mithril";
import css from "/assets/css/components/navbar.module.css";

const {div, a} = require("hyperscript-helpers")(m);

import svg from 'bundle-text:/assets/img/Logo_big_white.svg'
import Button from "./Button";

const Navbar: m.Component = {
    view() {
        return div("." + css.navbar, [
            a({href: "#!/"}, div('.'+css.logo,m.trust(svg))),
            div('.'+css.buttons,[
                m(Button,{
                    href:"/contact",
                    theme:".transparent",
                    name:"Who are we?"
                }),
                m(Button,{
                    href:"/mission",
                    theme:".transparent",
                    name:"Mission"
                }),
                m(Button,{
                    href:"/news",
                    theme:".transparent",
                    name:"News"
                }),
                m(Button,{
                    href:"/facts",
                    theme:".transparent",
                    name:"Facts"
                })
            ])
        ]);
    },
};

export default Navbar;
