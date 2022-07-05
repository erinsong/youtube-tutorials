import Dashboard from "./views/Dashboard.js";

// using history api to redirect to new page without loading new resource
// aka click links without reloading page
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// client-side router
// async to load content inside this function
const router = async () => {
    // define each route
    const routes = [
        { path: "/", view: Dashboard },
        //{ path: "/posts", view: () => console.log("Viewing Posts") },
        //{ path: "/settings", view: () => console.log("Viewing Settings") },
    ];

    const potentialMatches = routes.map(route => { 
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // if non-defined route, send to dashboard as default
    // another option could be to make a 404 route
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // creating new instance of the view at the match route
    const view = new match.route.view();

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