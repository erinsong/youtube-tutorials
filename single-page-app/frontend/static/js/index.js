// client-side router
// async to load content inside this function
const router = async () => {
    // define each route
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/posts", view: () => console.log("Viewing Posts") },
        { path: "/settings", view: () => console.log("Viewing Settings") },
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

    console.log(match.route.view());

};

document.addEventListener("DOMContentLoaded", () => {
    router();
});