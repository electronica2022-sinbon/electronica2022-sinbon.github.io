import animationBegin from './components/animation-begin.js'
import navPage from './components/nav-page.js'
import productCategory from './components/product-category.js'
import aboutSimbon from './components/about-sinbon.js'
import page404 from './components/page404.js'

export default [{
  name: 'animation-beign',
  path: '/', // not be '/', that is not init page
  component: animationBegin.toString()
}, {
  name: 'nav-page',
  path: '/main-nav',
  component: navPage.toString()
}, {
  name: 'product-category',
  path: '/product-category',
  component: productCategory.toString()
}, {
  name: 'about',
  path: '/about',
  component: aboutSimbon.toString()
}, {
  name: '404',
  path: '*',
  component: page404.toString()
}]

