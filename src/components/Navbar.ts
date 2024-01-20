import * as m from "mithril";
import css from "/assets/css/components/Navbar.module.css";

const { div, a } = require("hyperscript-helpers")(m);

import { Button, DefaultIcons } from "./Button";

const Navbar: m.Component = {
  view() {
    return div("." + css.navbar, [
      a(
        { href: "#!/" },
        div(
          "." + css.logo,
          m.trust(require("bundle-text:/assets/img/Logo_white.svg")),
        ),
      ),
      div("." + css.buttons, [
        m(Button, {
          href: "/contact",
          icon: DefaultIcons.Dark,
          name: "Who are we?",
        }),
        m(Button, {
          href: "/mission",
          icon: DefaultIcons.Dark,
          name: "Mission",
        }),
        m(Button, {
          href: "/news",
          icon: DefaultIcons.Dark,
          name: "News",
        }),
        m(Button, {
          href: "/facts",
          icon: DefaultIcons.Dark,
          name: "Facts",
        }),
      ]),
    ]);
  },
};

export default Navbar;
