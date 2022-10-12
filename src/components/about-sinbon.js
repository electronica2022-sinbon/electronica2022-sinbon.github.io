export default function aboutSimbon(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale0-to-origin')

    document.querySelector('.back-prev > img').addEventListener('click', () => {
      app.$router.push('/main-nav');
    })
  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale0-to-origin')
  }

  this.render = () => `
    <div class="about-sinbon">
      <div class="header">
        <div class="back-prev">
          <img src="./src/assets/back-prev.png" alt="">
          <div class="title">About</div>
        </div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <img class="options" src="./src/assets/options.png" alt="">
      </div>
      <div class="body">
        <div></div>
        <div class="content">
          <img src="./src/assets/about-content.png" alt="">
          <div class="read-me">
            Read Me
          </div>
        </div>
        <div class="qr-code">
          <img src="./src/assets/icon-mail.png" alt="">
          Send PDF as Email
        </div>
      </div>
    </div>`
}