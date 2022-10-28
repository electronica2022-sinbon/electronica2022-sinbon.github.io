export default function navMenu(app) {
  const blue_circle = document.querySelector('.transition-next-page')

  this.mounted = function () {
    blue_circle.classList.remove('scale-0')
    blue_circle.style.zIndex = -10;

    setTimeout(() => {
      document.querySelector('.menu-nav').classList.remove('scale-0')
    })
  }
  
  this.destroy = function () {
    blue_circle.style.zIndex = 10;
    blue_circle.classList.add('scale-0')
  }

  this.bindingEvent = () => {
    // 點擊選項，播放動畫
    document.querySelector('.triangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      document.querySelector('.menu-nav').classList.add('scale-0')
      setTimeout(() => {
        app.$router.push('product-category');
      }, 300)
    })

    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      document.querySelector('.menu-nav').classList.add('scale-0')
      setTimeout(() => {
        app.$router.back();
      }, 300)
    })

    document.querySelector('.circle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      document.querySelector('.menu-nav').classList.add('scale-0')
      setTimeout(() => {
        app.$router.push('case-study');
      }, 300)
    })

    // 進入指定 router
    document.querySelector('.rectangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      document.querySelector('.menu-nav').classList.add('scale-0')
      setTimeout(() => {
        app.$router.push('about');
      }, 300)
    })
  }

  this.render = () => `
    <div class="nav-menu">
      <div class="head">
        <div></div>
        <div></div>
        <img class="options close" src="./src/assets/close-white.png" alt="">
      </div>
      <div class="menu-nav scale-0">
        <div class="menu-nav-item-12">
          <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        </div>
        <div class="menu-nav-item-6 shape ">
          <img class="triangle" src="./src/assets/triangle-green.png" alt="">
          <div class="text triangle-text-fix">Product</div>
        </div>
        <div class="menu-nav-item-6 shape ">
          <img class="rectangle" src="./src/assets/rectangle-blue.png" alt="">
          <div class="text">About<br />SINBON</div>
        </div>
        <div class="menu-nav-item-12 shape ">
          <img class="circle" src="./src/assets/circle-orange.png" alt="">
          <div class="text">Case<br />Study</div>
        </div>
      </div>
    </div>`
}