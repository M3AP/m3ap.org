import * as m from "mithril";
import PageTemplate from "../components/PageTemplate";

const { div } = require("hyperscript-helpers")(m);

const MissionPage: m.Component = {
  view: function () {
    return m(PageTemplate, [div([])]);
  },
};

export default MissionPage;
