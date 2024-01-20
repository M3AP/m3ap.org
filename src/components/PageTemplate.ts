import * as m from "mithril";
import Navbar from "./Navbar";
import { Button, DefaultIcons } from "./Button";

import style from "/assets/css/components/PageTemplate.module.css";

const { div } = require("hyperscript-helpers")(m);

interface Attrs {
  css?: string;
  noLegal?: boolean;
}

const PageTemplate: m.Component<Attrs> = {
  view(vnode: m.Vnode<Attrs>) {
    return div("." + (vnode.attrs.css ?? ""), [
      m(Navbar),

      vnode.children,

      vnode.attrs.noLegal == null
        ? div(
            "." + style.legalButton,
            m(Button, {
              href: "/legal-notices",
              icon: DefaultIcons.Dark,
              name: "Legal Notices",
            }),
          )
        : "",
    ]);
  },
};

export default PageTemplate;
