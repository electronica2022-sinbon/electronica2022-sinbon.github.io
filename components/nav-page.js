export default function navPage() {

  this.mounted = function () {
    document.querySelector('.nav-page').classList.toggle('display-none')
    setTimeout(() => {
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.toggle('scale0-to-origin'))
    })
  }

  this.render = () => `
    <div class="nav-page display-none">
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