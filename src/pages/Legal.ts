import * as m from "mithril";
import PageTemplate from "../components/PageTemplate";
import style from "/assets/css/pages/Legal.module.css";

const { div, p, h1 } = require("hyperscript-helpers")(m);

const LegalPage: m.Component = {
  view: function () {
    return m(PageTemplate, { noLegal: true }, [
      div("." + style.page, [
        h1("Legal Notices"),
        p(
          "The following information (Impressum) is required under German law.",
        ),
        p("Filipe Manuel De Sousa Ramalho"),
        p("Address:"),
        p("E-Mail:"),
      ]),
    ]);
  },
};

export default LegalPage;
