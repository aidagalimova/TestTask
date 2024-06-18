const routes = {
  map: {
    id: "map-nav",
    template: "./pages/map.html",
    title: "Map",
  },
  time: {
    id: "time-nav",
    template: "./pages/time.html",
    title: "Time",
  },
  "#": {
    id: "resume-nav",
    template: "./pages/resume.html",
    title: "Resume",
  },
};

const styleNavTabs = (curRoute) => {
  for (const value of Object.values(routes)) {
    if (value.id !== curRoute.id) {
      const navEl = document.getElementById(`${value.id}`);
      navEl.className = navEl.className.replaceAll(" active", "");
    }
  }
  document.getElementById(curRoute.id).className += " active";
};

const locationHandler = async () => {
  var location = window.location.hash.replace("#", "");
  if (location.length == 0) {
    location = "#";
  }
  const route = routes[location];
  styleNavTabs(route);
  const html = await fetch(route.template).then((response) => response.text());
  document.getElementById("page").innerHTML = html;
  document.title = route.title;
};

window.addEventListener("hashchange", locationHandler);
locationHandler();

styleNavTabs(
  routes[window.location.hash.replace("#", "")]
    ? routes[window.location.hash.replace("#", "")]
    : routes["#"]
);
