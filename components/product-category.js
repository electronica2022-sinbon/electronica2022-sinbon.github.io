export default function productCategory(app) {

  this.mounted = function () {
    console.log('productCategory', productCategory)
  }

  this.render = () => `
    <div class="product-category">
      <div class="header">
        <div class="back-prev">
          <img src="./assets/back_prev.png" alt="">
        </div>
        <img class="sinbon-logo" src="./assets/logo.png" alt="">
        <img class="options" src="./assets/options.png" alt="">
      </div>
    </div>`
}