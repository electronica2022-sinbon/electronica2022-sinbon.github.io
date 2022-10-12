export default function page404(app) {

  this.mounted = function () {
    console.warn('404', 404)
  }

  this.render = () => `
    <div class="page-404">
      <div>找不到畫面...</div>
      <a href="/">回到首頁</a>
    </div>`
}