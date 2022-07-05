import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

// using history api to redirect to new page without loading new resource
// aka click links without reloading page
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// client-side router
// async to load content inside this function
const router = async () => {
    // console.log(pathToRegex("/posts/:id"));

    // define each route
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: ViewPost },
        { path: "/settings", view: Settings },
    ];

    const potentialMatches = routes.map(route => { 
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result != null);

    // if non-defined route, send to dashboard as default
    // another option could be to make a 404 route
    if (!match) {
        match = {
            route: routes[0],
            result: true
        };
    }

    // creating new instance of the view at the match route
    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) { // if event has data-link attribute
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});