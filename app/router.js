
export default function (config) {
  const { routes } = config;
  // data
  this.app = null;
  this.routes = routes;
  history.scrollRestoration = "auto";

  // methods
  this.install = install; // for use
  this.push = push;
  this.back = back;
  this.forward = forward;
  this.beforeEach = callback => {
    window.addEventListener("hashchange", (route) => {
      // this.app.mount(route.component.name)
      console.log('hash change', route);
      callback(route);
    });
  }
}

function install(app) {
  this.app = app
  this.app.$router = this;
  if (location.hash === '')
    location.hash = '#/'; // init hash
  const path = location.hash.split('#')[1];

  // 覆蓋第一頁為 route 指定的頁面
  const curr_route = findTargetRoute.call(this, { path });
  const componentConstructor = stringToFunction(curr_route.component);
  this.app.initialFirstPage(componentConstructor)

  // window.addEventListener('hashchange', () => {
  //   this.push({ path: location.hash.split('#')[1] })
  // })
}

function forward () {
  history.forward();
}

function back () {
  history.back();
}

function push(routeCondition) {
  // 找出指定的 route => curr_route
  const curr_route = findTargetRoute.call(this, routeCondition);
  const componentConstructor = stringToFunction(curr_route.component);


  history.pushState(curr_route, curr_route.name, `#${curr_route.path}`);
  // if beforeEnter run it

  // curr_route to pushState
  if ('beforeEnter' in curr_route) {
    // 執行 beforeEnter
    const next = () => this.app.mounte(componentConstructor);
    curr_route.beforeEnter(curr_route, {}, next);
  }
  else {
    this.app.mounte(componentConstructor);
  }
}

function stringToFunction(stringFunction) {
  return new Function(`return ${stringFunction}`)();
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
