import animationBegin from './components/animation-begin.js'
import navPage from './components/nav-page.js'
import productCategory from './components/product-category.js'
import production from './components/production.js'
import caseStudy from './components/case-study.js'
import caseExample from './components/case-example.js'
import aboutSimbon from './components/about-sinbon.js'
import page404 from './components/page404.js'

export default [{
  name: 'animation-beign',
  path: '/', // not be '/', that is not init page
  component: animationBegin
}, {
  name: 'nav-page',
  path: '/main-nav',
  component: navPage
}, {
  name: 'product-category',
  path: '/product-category',
  component: productCategory
}, {
  name: 'electric-vehicle',
  path: '/electric-vehicle',
  component: production,
  beforeEnter: (next) => {
    const type = Cookies.get('SINBON_TYPE');
    axios.get('https://api.airtable.com/v0/appKo4M9y5FKMRTUE/E-mobility', {
      headers: {
        'Authorization': 'Bearer keyPYCkBHUENMuMDp'
      }
    })
      .then(res => res.data)
      .then(data => window.sinbon.production = data.records.filter(item => item.fields.Type.includes(type)))
      .then(data => data.sort((a, b) => a.fields.ID.localeCompare(b.fields.ID, 'en', { numeric: true })))
      .then(next)
  }
}, {
  name: 'robotics',
  path: '/robotics',
  component: production,
  beforeEnter: (next) => {
    const type = Cookies.get('SINBON_TYPE');
    axios.get('https://api.airtable.com/v0/appKo4M9y5FKMRTUE/Smart Factory', {
      headers: {
        'Authorization': 'Bearer keyPYCkBHUENMuMDp'
      }
    })
      .then(res => res.data)
      .then(data => window.sinbon.production = data.records.filter(item => item.fields.Type.includes(type)))
      .then(data => data.sort((a, b) => a.fields.ID.localeCompare(b.fields.ID, 'en', { numeric: true })))
      .then(next)
  }
}, {
  name: 'patient-monitoring',
  path: '/patient-monitoring',
  component: production,
  beforeEnter: (next) => {
    const type = Cookies.get('SINBON_TYPE');
    axios.get('https://api.airtable.com/v0/appKo4M9y5FKMRTUE/Medical', {
      headers: {
        'Authorization': 'Bearer keyPYCkBHUENMuMDp'
      }
    })
      .then(res => res.data)
      .then(data => window.sinbon.production = data.records.filter(item => item.fields.Type.includes(type)))
      .then(data => data.sort((a, b) => a.fields.ID.localeCompare(b.fields.ID, 'en', { numeric: true })))
      .then(next)
  }
}, {
  name: 'case-study',
  path: '/case-study',
  component: caseStudy
}, {
  name: 'case1',
  path: '/case/1',
  component: caseExample,
  beforeEnter: (next) => {
    axios.get('./src/assets/case-example.json')
      .then(res => res.data)
      .then(res => res.data)
      .then(data => window.sinbon.case = data[0])
      .then(next)
  }
}, {
  name: 'case2',
  path: '/case/2',
  component: caseExample,
  beforeEnter: (next) => {
    axios.get('./src/assets/case-example.json')
      .then(res => res.data)
      .then(res => res.data)
      .then(data => window.sinbon.case = data[1])
      .then(next)
  }
}, {
  name: 'case3',
  path: '/case/3',
  component: caseExample,
  beforeEnter: (next) => {
    axios.get('./src/assets/case-example.json')
      .then(res => res.data)
      .then(res => res.data)
      .then(data => window.sinbon.case = data[2])
      .then(next)
  }
}, {
  name: 'case4',
  path: '/case/4',
  component: caseExample,
  beforeEnter: (next) => {
    axios.get('./src/assets/case-example.json')
      .then(res => res.data)
      .then(res => res.data)
      .then(data => window.sinbon.case = data[3])
      .then(next)
  }
}, {
  name: 'case5',
  path: '/case/5',
  component: caseExample,
  beforeEnter: (next) => {
    axios.get('./src/assets/case-example.json')
      .then(res => res.data)
      .then(res => res.data)
      .then(data => window.sinbon.case = data[4])
      .then(next)
  }
}, {
  name: 'case6',
  path: '/case/6',
  component: caseExample,
  beforeEnter: (next) => {
    axios.get('./src/assets/case-example.json')
      .then(res => res.data)
      .then(res => res.data)
      .then(data => window.sinbon.case = data[5])
      .then(next)
  }
}, {
  name: 'about',
  path: '/about',
  component: aboutSimbon
}, {
  name: '404',
  path: '*',
  component: page404
}]

