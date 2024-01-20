import * as m from "mithril";
import Button from '../components/Button'
import NoticesButtons from '../components/LegalButton'
import svg from 'bundle-text:/assets/img/Logo_big.svg'
import Navbar from "../components/Navbar";
import NavbarStyle from "/assets/css/components/navbar.module.css";

import style from "/assets/css/pages/home.module.css";
import {addScrollCheck} from '../utils';

const {div, p} = require('hyperscript-helpers')(m);


const page: m.Component = {
    view() {
        return div('.' + style.page + '.home .background', {
            oncreate: () => {
                window.scrollTo(0, 0);
                const navBar = document.querySelector('.' + NavbarStyle.navbar);
                const splash = document.querySelector(".splash");
                addScrollCheck(navBar, NavbarStyle.scroll, 10);
                addScrollCheck(splash, "scroll", 10);
            }
        }, [
            m(Navbar),
            div('.splash', [
                div('.logo', m.trust(svg)),
                div('.row', [
                    m(Button, {
                        newtab: true,
                        href: "https://tech.lgbt/@filipe_mdsr",
                        icon: ".fab",
                        theme: ".instagram"
                    }),
                    m(Button, {
                        newtab: true,
                        href: "https://github.com/FilipeRamalho",
                        icon: ".fab",
                        theme: ".mastodon"
                    }),
                    m(Button, {
                        newtab: true,
                        href: "https://github.com/FilipeRamalho",
                        icon: ".fab",
                        theme: ".twitter"
                    })
                ]),
                div('.row', [
                    div('.comp.mouse')
                ]),
            ]),
            m(NoticesButtons),
            div('.content', [
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
                p("dsfsdf"),
            ])
        ])
    }
};
export default page;
