import animationBegin from './components/animation-begin.js'
import navPage from './components/nav-page.js'

export default [{
  name: 'animation-beign',
  path: '/', // not be '/', that is not init page
  component: animationBegin.toString()
}, {
  name: 'nav-page',
  path: '/main-nav',
  component: navPage.toString()
}, {
  name: 'nav-page1',
  path: '/main-nav1',
  component: animationBegin.toString()
}]

