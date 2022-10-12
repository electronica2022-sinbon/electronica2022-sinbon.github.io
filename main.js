import App from './src/app/app.js'
import Router from './src/app/router.js'
import routes from './src/routes.js'
import animationBegin from './src/components/animation-begin.js'

const app = new App('#app', animationBegin)
app.use(new Router({
  routes
}));

app.mounte()



