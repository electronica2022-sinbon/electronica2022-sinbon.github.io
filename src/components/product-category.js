export default function productCategory(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')

    document.querySelector('.back-prev > img').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('/main-nav');
      }, 300)
    })

    document.querySelectorAll('.triangle').forEach(product => {
      product.addEventListener('click', e => {
        console.log('product', e);
        app.$router.push('/electric-vehicle')
      })
    })

    document.querySelectorAll('.circle').forEach(product => {
      product.addEventListener('click', () => {
        app.$router.push('/robotics')
      })
    })

    document.querySelectorAll('.rectangle').forEach(product => {
      product.addEventListener('click', () => {
        app.$router.push('/patient-monitoring')
      })
    })
  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale-0')
  }

  this.render = () => `
    <div class="product-category">
      <div class="header">
        <div class="back-prev">
          <img src="./src/assets/back-prev.png" alt="">
          <div class="title">Product Category</div>
        </div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <img class="options" src="./src/assets/options.png" alt="">
      </div>
      <div class="body">
        <div class="body-item">
          <div class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>Electric<br />Vehicle</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>E-mobility<br />Connectivity</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>E-bike<br />System</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>Other<br />Mobility</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Automation</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Robotics</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Logistics</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Micro-<br />inverter</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Multi-<br />application</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Patient<br />Monitoring</span>
          </div>
          <div class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Diagnostics<br />Imaging</span>
          </div>
          <div class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Medical<br />Robots</span>
          </div>
        </div>
      </div>
    </div>`
}