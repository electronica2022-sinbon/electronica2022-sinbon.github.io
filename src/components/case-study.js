export default function caseStudy(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')

  }

  this.destroy = function () {
    
  }

  this.bindingEvent = () => {
    document.querySelector('.back-prev > img').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('/nav-main');
      }, 300)
    })
    document.querySelector('.options > img').addEventListener('click', () => {
      console.log('options');
      document.querySelector('.transition-next-menu').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('/nav-menu');
      }, 300)
    })

    document.querySelectorAll('.body .option').forEach(item => {
      item.addEventListener('click', () => {
        app.$router.push({ name: item.dataset.case });
      })
    })
  }

  this.render = () => `
    <div class="case-study">
      <div class="head">
        <div class="back-prev">
          <img src="./src/assets/back-prev.png" alt="">
          <div class="title">Case Study</div>
        </div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <div class="options">
          <div class="transition-next-menu"></div>
          <img src="./src/assets/options.png" alt="">
        </div>
      </div>
      <div class="body">
        <div class="body-item">
          <div class="option circle" data-case="case5">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Robotic<br /> Tech Vest</span>
          </div>
          <div class="option circle" data-case="case6">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>Sewer System</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option rectangle" data-case="case1">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Cardiac<br /> Mapping</span>
          </div>
          <div class="option rectangle" data-case="case2">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>X-ray<br />Detector<br />Panel</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option triangle" data-case="case3">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>EV Inlet</span>
          </div>
          <div class="option triangle" data-case="case4">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>E-bike</span>
          </div>
        </div>
      </div>
    </div>`
}