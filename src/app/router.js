
export default function (config) {
  const { routes } = config;
  // data
  this.app = null;
  this.routes = routes;
  history.scrollRestoration = "auto";
  this.search = '';

  // methods
  this.install = install; // for use
  this.push = push;
  this.back = back;
  this.forward = forward;
  this.findTargetRoute = findTargetRoute
  this.beforeEach = beforeEach
  window.addEventListener('hashchange', beforeEach.bind(this));
}


function install(app) {
  this.app = app
  this.app.$router = this;
  if (location.hash === '')
    location.hash = "/"; // init hash
  const path = location.hash.split('#')[1];

  // 覆蓋第一頁為 route 指定的頁面
  const curr_route = this.findTargetRoute({ path });
  this.app.initialFirstPage(curr_route.component)
}

function forward () {
  history.forward();
}

function back () {
  history.back();
}

function beforeEach() {
  console.log('beforeEach');
  
  const path = location.hash.split('#')[1]
  const new_route = this.findTargetRoute({ path });
  this.app.mounte(new_route.component);
}

function push(routeCondition, query) {
  // 找出指定的 route => curr_route
  console.log('push', routeCondition, query);
  const curr_route = this.findTargetRoute(routeCondition);
  
  // 要傳給 beforeEach 的 UrlAppendSearch
  this.search = new URLSearchParams(query).toString();
  
  location.hash = `${curr_route.path}`
}

function findTargetRoute(routeCondition) {
  let route = null
  if (typeof routeCondition === 'string')
    route = this.routes.find(route => route.name === routeCondition || route.path === routeCondition);
  else if (routeCondition instanceof Object) {
    route = this.routes.find(route => Object.keys(routeCondition).every(key => route[key] === routeCondition[key]));
  } 
  
  if (route == null) {
    route = this.routes.find(route => route.path === '*');
  }

  return route
}
