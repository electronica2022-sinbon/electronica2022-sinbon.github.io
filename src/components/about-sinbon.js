export default function aboutSimbon(app) {

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
  }

  this.destroy = function () {
    document.querySelector('.transition-next-page').classList.remove('scale-0')
  }

  this.bindingEvent = () => {
    // after render
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

    document.querySelector('.qr-code-button').addEventListener('click', () => {
      document.querySelector('.pop-up').classList.remove('display-none');
      setTimeout(() => {
        document.querySelector('.pop-up').classList.add('show');
      })
    })
    document.querySelector('.pop-up .close').addEventListener('click', () => {
      document.querySelector('.pop-up').classList.remove('show');
      setTimeout(() => {
        document.querySelector('.pop-up').classList.add('display-none');
      }, 300)
    })


    document.querySelector('.read-me-button').addEventListener('click', () => {
      document.querySelector('iframe.body').src = "https://heyzine.com/flip-book/SINBON2022Electronica?fbclid=IwAR273vBJx8uczl2NclAz_cP9dUoJd1cuu2bE7whseSO8EytFNWMY_opAkbg#page/1";
      document.querySelector('.ebook').classList.remove('display-none');
      setTimeout(() => {
        document.querySelector('.ebook').classList.add('show');
      })
    })
    document.querySelector('.ebook .close').addEventListener('click', () => {
      document.querySelector('.ebook').classList.remove('show');
      setTimeout(() => {
        document.querySelector('.ebook').classList.add('display-none');
      }, 300)
    })
  }

  this.render = () => `
    <div class="about-sinbon">
      <div class="head">
        <div class="back-prev">
          <img src="./src/assets/back-prev.png" alt="">
          <div class="title">About</div>
        </div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <div class="options">
          <div class="transition-next-menu"></div>
          <img src="./src/assets/options.png" alt="">
        </div>
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
          <span>Download from your mobile device</span>
        </div>
      </div>
      <div class="pop-up display-none">
        <div class="content">
          <div class="head">
            <img class="close" src="./src/assets/close-blue.png" alt="">
          </div>
          <div class="body">
            <img class="qr-code" src="./src/assets/form-url-sinbon.png" alt="">
          </div>
          <div class="footer">
            Scan the QR code and fill in your email,<br />
            and we will send a PDF to you.
          </div>
        </div>
      </div>
      <div class="ebook display-none">
        <div class="content">
          <div class="head">
            <img class="close" src="./src/assets/close-blue.png" alt="">
          </div>
          <iframe class="body" src="https://heyzine.com/flip-book/SINBON_CompanyProfile#page/1">
          </iframe>
        </div>
      </div>
    </div>`
}
