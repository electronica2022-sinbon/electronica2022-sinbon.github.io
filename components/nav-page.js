export default function navPage(app) {

  this.mounted = function () {
    document.querySelector('.nav-page').classList.toggle('display-none')
    setTimeout(() => {
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.toggle('scale0-to-origin'))
    })

    // 點擊選項，播放動畫    
    document.querySelector('.triangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.toggle('scale0-to-origin')
      setTimeout(() => {
        app.$router.push('/');
      }, 300)
      
    })
    document.querySelector('.circle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.toggle('scale0-to-origin')
      setTimeout(() => {
        app.$router.push('/');
      }, 300)

    })

    // 進入指定 router
    document.querySelector('.rectangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.toggle('scale0-to-origin')
      setTimeout(() => {
        app.$router.push('product-category');
      }, 300)
    })
  }

  this.render = () => `
    <div class="nav-page display-none">
      <div class="transition-next-page scale0-to-origin"></div>
      <div class="header">
        <img class="back-prev" src="./assets/back_prev.png" alt="">
        <img class="sinbon-logo" src="./assets/logo.png" alt="">
        <img class="options" src="./assets/options.png" alt="">
      </div>
      <div class="main-nav">
        <div class="main-nav-item shape scale0-to-origin">
          <img class="triangle" src="./assets/triangle.png" alt="">
          <div class="text triangle-text-fix">Product</div>
        </div>
        <div class="main-nav-item shape scale0-to-origin">
          <img class="circle" src="./assets/circle.png" alt="">
          <div class="text">Case<br />Study</div>
        </div>
        <div class="main-nav-item shape scale0-to-origin">
          <img class="rectangle" src="./assets/rectangle.png" alt="">
          <div class="text">About<br />SINBON</div>
        </div>
      </div>
    </div>`
}