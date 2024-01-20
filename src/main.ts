import * as m from "mithril";
import HomeView from "./pages/Home";
import "../assets/css/main.css";

require("normalize.css");

const el = document.getElementById("content");
m.route(el, "/home", {
    "/home": HomeView,
});
