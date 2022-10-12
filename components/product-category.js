export default function productCategory(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale0-to-origin')

    document.querySelector('.back-prev > img').addEventListener('click', () => {
      // document.querySelector('.transition-next-page').classList.remove('scale0-to-origin')
      app.$router.push('/main-nav');
      // setTimeout(() => {
      // }, 300)
    })

  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale0-to-origin')
  }

  this.render = () => `
    <div class="product-category">
      <div class="header">
        <div class="back-prev">
          <img src="./assets/back_prev.png" alt="">
          <div class="title">Product Category</div>
        </div>
        <img class="sinbon-logo" src="./assets/logo.png" alt="">
        <img class="options" src="./assets/options.png" alt="">
      </div>
      <div class="body">
        <div class="body-item">
          <div class="option triangle">
            <img class="shape" src="./assets/triangle-blue.png" alt="">
            <span>Electric<br />Vehicle</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./assets/triangle-blue.png" alt="">
            <span>E-mobility<br />Connectivity</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./assets/triangle-blue.png" alt="">
            <span>E-bike<br />System</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./assets/triangle-blue.png" alt="">
            <span>Other<br />Mobility</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option circle">
            <img class="shape" src="./assets/circle-orange.png" alt="">
            <span>Automation</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./assets/circle-orange.png" alt="">
            <span>Robotics</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./assets/circle-orange.png" alt="">
            <span>Logistics</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./assets/circle-orange.png" alt="">
            <span>Micro-<br />inverter</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./assets/circle-orange.png" alt="">
            <span>Multi-<br />application</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option rectangle">
            <img class="shape" src="./assets/rectangle-red.png" alt="">
            <span>Patient<br />Monitoring</span>
          </div>
          <div class="option rectangle">
            <img class="shape" src="./assets/rectangle-red.png" alt="">
            <span>Diagnostics<br />Imaging</span>
          </div>
          <div class="option rectangle">
            <img class="shape" src="./assets/rectangle-red.png" alt="">
            <span>Medical<br />Robots</span>
          </div>
        </div>
      </div>
    </div>`
}