export default function navPage(app) {

  this.mounted = function () {
    document.querySelector('.nav-page').classList.toggle('display-none')
    document.querySelector('.transition-next-page').classList.add('scale0-to-origin')
    setTimeout(() => {
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.toggle('scale0-to-origin'))
    })

    // 點擊選項，播放動畫    
    document.querySelector('.triangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale0-to-origin')
      setTimeout(() => {
        app.$router.push('product-category');
      }, 300)
      
    })
    document.querySelector('.circle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale0-to-origin')
      setTimeout(() => {
        app.$router.push('/');
      }, 300)

    })

    // 進入指定 router
    document.querySelector('.rectangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale0-to-origin')
      setTimeout(() => {
        app.$router.push('/');
      }, 300)
    })
  }

  this.render = () => `
    <div class="nav-page display-none">
      <div class="header">
        <!-- 前後兩個元素隱藏 -->
        <div></div>
        <img class="sinbon-logo" src="./assets/logo.png" alt="">
        <div></div>
      </div>
      <div class="main-nav">
        <div class="main-nav-item shape scale0-to-origin">
          <img class="triangle" src="./assets/triangle-green.png" alt="">
          <div class="text triangle-text-fix">Product</div>
        </div>
        <div class="main-nav-item shape scale0-to-origin">
          <img class="circle" src="./assets/circle-orange.png" alt="">
          <div class="text">Case<br />Study</div>
        </div>
        <div class="main-nav-item shape scale0-to-origin">
          <img class="rectangle" src="./assets/rectangle-blue.png" alt="">
          <div class="text">About<br />SINBON</div>
        </div>
      </div>
    </div>`
}