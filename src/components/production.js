export default function production(app) {
  this.backgroundUrl = './src/assets/background-triangle.png';
  const routeHash = location.hash.split('#/')[1];
  const routeToBacktroundTitle = {
    'electric-vehicle': './src/assets/background-title-E-mobility.png',
    'robotics': './src/assets/background-title-SmartFactory.png',
    'patient-monitoring': './src/assets/background-title-Medical.png',
  }
  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')

    setTimeout(() => {
      document.querySelectorAll('.initial').forEach(item => {
        item.classList.remove('initial')
      })
    }, 10)
    document.querySelector('.icon-close').addEventListener('click', () => {
      app.$router.push('/product-category')
    })
  }

  this.destroy = function () {
  }

  this.render = () => `
    <div class="production ${routeHash}">
      <img class="icon-close" src="./src/assets/close-white.png" alt="">
      <div class="background-title initial">
        <img src="${routeToBacktroundTitle[routeHash]}" alt="">
      </div> 
      <div class="container">
        <div class="title">
          <h2 class="initial"></h2>
          <h1 class="initial">CCS2 DC Charging Cable</h1>
          <div class="photo initial">
            <img src="https://fakeimg.pl/800x550/" alt="">
          </div>
        </div>
        <div class="content">
          <div class="pagination">
            <div class="prev">
              <img src="./src/assets/slider_prev.png" alt="">
            </div>
            <span>2/11</span>
            <div class="next">
              <img src="./src/assets/slider_next.png" alt="">
            </div>
          </div>
          <div class="text">
            <p>
              Flame Retardant Grade: UL94V-0 <br />
              Outdoor Suitability: UL 746C (f1)<br />
              Protection Grade: IP66<br />
              Withstand Vehicle Rolling Test
            </p>
          </div>
        </div>
      </div>
    </div>`
}