import * as m from "mithril";
import HomeView from "./pages/Home";
import ContactView from './pages/contact'
import FactsView from './pages/facts'
import MissionView from './pages/mission'
import NewsView from './pages/news'
import LegalNoticeView from './pages/Legal'

import "../assets/css/main.css";
import "../assets/css/utils.css";
import "../assets/css/home.css";
import "../assets/css/brand.css";
import "../assets/css/components/button.css";
import "../assets/css/components/mouse.css";
import "../assets/css/components/rainbow.css";
import "../assets/css/components/notices-button.css";

require("normalize.css");

const el = document.getElementById("content");
m.route(el, "/home", {
    "/home": HomeView,
    "/contact": ContactView,
    "/mission": MissionView,
    "/news": NewsView,
    "/facts": FactsView,
    "/legal-notices": LegalNoticeView
});
