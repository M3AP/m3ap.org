import * as m from "mithril";

export function route(url: string, newTab: boolean) {
  if (url.startsWith("http")) {
    newTab ? window.open(url, "_blank") : (window.location.href = url);
    return;
  }
  m.route.set(url);
}

export function addScrollCheck(
  classname: Element,
  scrollClassname: string,
  scrollTrigger: number,
) {
  classname.classList.add(scrollClassname);
  window.addEventListener("scroll", function () {
    if (window.scrollY < scrollTrigger) {
      // check scroll position
      classname.classList.add(scrollClassname);
    } else {
      classname.classList.remove(scrollClassname);
    }
  });
}
