export default function caseStudy(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')

    document.querySelector('.back-prev > img').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('/main-nav');
      }, 300)
    })

  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale-0')
  }

  this.render = () => `
    <div class="case-study">
      <div class="header">
        <div class="back-prev">
          <img src="./src/assets/back-prev.png" alt="">
          <div class="title">Case Studyt</div>
        </div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <img class="options" src="./src/assets/options.png" alt="">
      </div>
      <div class="body">
        <div class="body-item">
          <div class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>Cardiac<br />Mapping</span>
          </div>
          <div class="option triangle">
            <img class="shape" src="./src/assets/triangle-blue.png" alt="">
            <span>X-ray<br />Detector<br />Panel</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>EV Inlet</span>
          </div>
          <div class="option circle">
            <img class="shape" src="./src/assets/circle-orange.png" alt="">
            <span>E-bike</span>
          </div>
        </div>
        <div class="body-item">
          <div class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Robotic<br />Tech Vest</span>
          </div>
          <div class="option rectangle">
            <img class="shape" src="./src/assets/rectangle-red.png" alt="">
            <span>Sewer<br />System</span>
          </div>
        </div>
      </div>
    </div>`
}