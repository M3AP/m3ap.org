import m from 'mithril'
//@ts-ignore
import HomeView from './pages/home.ts'
//@ts-ignore
import ContactView from './pages/contact.ts'
//@ts-ignore
import FactsView from './pages/facts.ts'
//@ts-ignore
import MissionView from './pages/mission.ts'
//@ts-ignore
import NewsView from './pages/news.ts'
//@ts-ignore
import LegalNoticeView from './pages/legal-notice.ts'

require('normalize.css');

import '../../index.html'
import '../../favicon.ico'

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../img/', false, /\.(png|jpe?g|webp)$/));
const stylesheets = importAll(require.context('../css/', false, /\.(css)$/));
const comp_stylesheets = importAll(require.context('../css/components/', false, /\.(css)$/));

const el = document.getElementById('content')
//@ts-ignore
m.route(el, "/home", {
    "/home": HomeView,
    "/contact": ContactView,
    "/mission": MissionView,
    "/news": NewsView,
    "/facts": FactsView,
    "/legal-notices": LegalNoticeView
})