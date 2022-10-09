export default function page404(app) {

  this.mounted = function () {
    console.warn('404', 404)
  }

  this.render = () => `
    <div class="page-404">
      404
    </div>`
}