import App from './app/app.js'
import Router from './app/router.js'
import routes from './routes.js'
import animationBegin from './components/animation-begin.js'

const app = new App('#app', animationBegin)
app.use(new Router({
  routes
}));

app.mounte()



