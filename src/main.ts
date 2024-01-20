import * as m from "mithril";
import HomeView from "./pages/Home";
import ContactView from "./pages/Contact";
import FactsView from "./pages/Facts";
import MissionView from "./pages/Mission";
import NewsView from "./pages/News";
import LegalNoticeView from "./pages/Legal";

import "../assets/css/main.css";

require("normalize.css");

const el = document.getElementById("content");
m.route(el, "/home", {
  "/home": HomeView,
  "/contact": ContactView,
  "/mission": MissionView,
  "/news": NewsView,
  "/facts": FactsView,
  "/legal-notices": LegalNoticeView,
});
