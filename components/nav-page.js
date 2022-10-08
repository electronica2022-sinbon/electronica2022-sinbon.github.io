export default function navPage(app) {

  this.mounted = function () {
    document.querySelector('.nav-page').classList.toggle('display-none')
    setTimeout(() => {
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.toggle('scale0-to-origin'))
    })

    document.querySelectorAll('.main-nav-item > img').forEach(item => {
      item.addEventListener('click', e => {
        console.log('e.currentTarget', e.currentTarget)
        document.querySelector('.transition-next-page').classList.toggle('scale0-to-origin')
        setTimeout(() => {
          app.$router.push('nav-page1');
        }, 300)
      })
    })
  }

  this.render = () => `
    <div class="nav-page display-none">
      <div class="transition-next-page scale0-to-origin"></div>
      <div class="sinbon-logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <div class="main-nav">
        <div class="main-nav-item shape scale0-to-origin">
          <img src="./assets/triangle.png" alt="">
          <div class="text triangle-text-fix">Product</div>
        </div>
        <div class="main-nav-item shape scale0-to-origin">
          <img src="./assets/circle.png" alt="">
          <div class="text">Case<br />Study</div>
        </div>
        <div class="main-nav-item shape scale0-to-origin">
          <img src="./assets/Rectangle.png" alt="">
          <div class="text">About<br />SINBON</div>
        </div>
      </div>
    </div>`
}