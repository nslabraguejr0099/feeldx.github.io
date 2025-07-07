// var app_url = 'https://nslabraguejr0099.github.io/feeldx.github.io/';
var app_url = 'http://localhost/apps/feeldx/';

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404:       "pages/404.html",
    "":        "pages/index.html",
    "index":   "pages/index.html",
    "about":   "pages/about.html",
    "contact": "pages/contact.html",
};

const handleLocation = async () => {
    const path = window.location.href.replace(app_url, '');
    const route = routes[path] || routes[404];
    $('#main-page').load(route);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();