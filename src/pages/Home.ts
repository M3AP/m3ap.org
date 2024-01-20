import * as m from "mithril";
import { Button, DefaultIcons } from "../components/Button";
import NavbarStyle from "/assets/css/components/Navbar.module.css";
import PageTemplate from "../components/PageTemplate";

import { addScrollCheck } from "../utils";

import style from "/assets/css/pages/Home.module.css";

const { div } = require("hyperscript-helpers")(m);

const Home: m.Component = {
  view() {
    return m(PageTemplate, [
      div(
        "." + style.home,
        {
          oncreate: () => {
            window.scrollTo(0, 0);
            const navBar = document.querySelector("." + NavbarStyle.navbar);
            const splash = document.querySelector("." + style.splash);
            addScrollCheck(navBar, NavbarStyle.scroll, 10);
            addScrollCheck(splash, style.scroll, 10);
          },
        },
        [
          div("." + style.splash, [
            div(
              "." + style.logo,
              m.trust(require("bundle-text:/assets/img/Logo_black.svg")),
            ),
            div("." + style.row, [
              m(Button, {
                newTab: true,
                href: "#",
                icon: DefaultIcons.Threads,
              }),
              m(Button, {
                newTab: true,
                href: "#",
                icon: DefaultIcons.Mastodon,
              }),
              m(Button, {
                newTab: true,
                href: "#",
                icon: DefaultIcons.Twitter,
              }),
            ]),
            div("." + style.row, [div("." + style.mouse)]),
          ]),
          div("." + style.content, []),
        ],
      ),
    ]);
  },
};
export default Home;
