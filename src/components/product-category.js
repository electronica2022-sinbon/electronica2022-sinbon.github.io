export default function productCategory(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
    Cookies.remove('SINBON_TYPE', '')
  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale-0')
  }

  this.bindingEvent = () => {
    document.querySelectorAll('.back-prev > img, .sinbon-logo').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.transition-next-page').classList.remove('scale-0')
        setTimeout(() => {
          app.$router.push('/nav-main');
        }, 300)
      })
    })
    document.querySelector('.options > img').addEventListener('click', () => {
      console.log('options');
      document.querySelector('.transition-next-menu').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('/nav-menu');
      }, 300)
    })

    document.querySelectorAll('.triangle').forEach(product => {
      product.addEventListener('click', (e) => {
        const current_data_set = e.currentTarget.dataset.type;
        Cookies.set('SINBON_TYPE', current_data_set);
        app.$router.push('/electric-vehicle');
      })
    })

    document.querySelectorAll('.circle').forEach(product => {
      product.addEventListener('click', (e) => {
        const current_data_set = e.currentTarget.dataset.type;
        Cookies.set('SINBON_TYPE', current_data_set);
        app.$router.push('/robotics');
      })
    })

    document.querySelectorAll('.rectangle').forEach(product => {
      product.addEventListener('click', (e) => {
        const current_data_set = e.currentTarget.dataset.type;
        Cookies.set('SINBON_TYPE', current_data_set);
        app.$router.push('/patient-monitoring');
      })
    })
  }

  this.render = () => `
    <div class="product-category">
      <div class="head">
        <div class="back-prev">
          <img src="./src/assets/back-prev.png" alt="">
          <div class="title">Product Category</div>
        </div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <div class="options">
          <div class="transition-next-menu"></div>
          <img src="./src/assets/options.png" alt="">
        </div>
      </div>
      <div class="body">
        <div class="body-item">
          <div data-type="Electric Vehicle" class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>Electric<br />Vehicle</span>
          </div>
          <div data-type="E-mobility Connectivity" class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>E-mobility<br />Connectivity</span>
          </div>
          <div data-type="E-bike System" class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>E-bike<br />System</span>
          </div>
          <div data-type="Other Mobility" class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>Other<br />Mobility</span>
          </div>
        </div>
        <div class="body-item">
          <div data-type="Automation" class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Automation</span>
          </div>
          <div data-type="Robotics" class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Robotics</span>
          </div>
          <div data-type="Logistics" class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Logistics</span>
          </div>
          <div data-type="Micro-inverter" class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Micro-<br />inverter</span>
          </div>
          <div data-type="Multi-application" class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Multi-<br />application</span>
          </div>
        </div>
        <div class="body-item">
          <div data-type="Monitoring" class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Patient<br />Monitoring</span>
          </div>
          <div data-type="Diagnostics Imaging" class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Diagnostics<br />Imaging</span>
          </div>
          <div data-type="Medical Robots" class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Medical<br />Robots</span>
          </div>
        </div>
      </div>
    </div>`
}