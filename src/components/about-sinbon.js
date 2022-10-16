export default function aboutSimbon(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale-0')
  }

  this.bindingEvent = () => {
    // after render
    document.querySelector('.back-prev > img').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('/main-nav');
      }, 300)
    })

    document.querySelector('.qr-code-button').addEventListener('click', () => {
      document.querySelector('.pop-up').classList.add('show');
    })
    document.querySelector('.pop-up .close').addEventListener('click', () => {
      document.querySelector('.pop-up').classList.remove('show');
    })


    document.querySelector('.read-me-button').addEventListener('click', () => {
      document.querySelector('iframe.body').src = "https://heyzine.com/flip-book/SINBON2022Electronica?fbclid=IwAR273vBJx8uczl2NclAz_cP9dUoJd1cuu2bE7whseSO8EytFNWMY_opAkbg#page/1";
      document.querySelector('.ebook').classList.add('show');
    })
    document.querySelector('.ebook .close').addEventListener('click', () => {
      document.querySelector('.ebook').classList.remove('show');
    })
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
          <div class="read-me-button">
            Read Me
          </div>
        </div>
        <div class="qr-code-button">
          <img src="./src/assets/icon-email.png" alt="">
          <span>Send PDF as Email</span>
        </div>
      </div>
      <div class="pop-up">
        <div class="content">
          <div class="head">
            <img class="close" src="./src/assets/close-blue.png" alt="">
          </div>
          <div class="body">
            <img class="qr-code" src="./src/assets/qr-code-book.png" alt="">
          </div>
          <div class="footer">
            Scan the QR code and fill in your email,<br />
            and we will send a PDF to you.
          </div>
        </div>
      </div>
      <div class="ebook">
        <div class="content">
          <div class="head">
            <img class="close" src="./src/assets/close-blue.png" alt="">
          </div>
          <iframe class="body" src="https://heyzine.com/flip-book/SINBON2022Electronica?fbclid=IwAR273vBJx8uczl2NclAz_cP9dUoJd1cuu2bE7whseSO8EytFNWMY_opAkbg#page/1">
          </iframe>
        </div>
      </div>
    </div>`
}