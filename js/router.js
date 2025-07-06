var app_url = 'https://nslabraguejr0099.github.io/feeldx.github.io/';
// var app_url = 'http://localhost/apps/feeldx/';

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
console.log(event.target.href);
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404:     "pages/404.html",
    "":      "pages/index.html",
    "index": "pages/index.html",
    "sample": "pages/sample.html",
};

const handleLocation = async () => {
    const path = window.location.href.replace(app_url, '');
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();