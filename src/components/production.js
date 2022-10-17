export default function production(app) {
  this.backgroundUrl = './src/assets/background-triangle.png';
  const routeHash = location.hash.split('#/')[1];
  const routeToBacktroundTitle = {
    'electric-vehicle': './src/assets/background-title-E-mobility.png',
    'robotics': './src/assets/background-title-SmartFactory.png',
    'patient-monitoring': './src/assets/background-title-Medical.png',
  }
  let api_data = window.sinbon.production;
  let index = 0;

  function current_data(index, field) {
    if (index != null && field != null) {
      if (field in api_data[index].fields && api_data[index].fields[field].trim().length !== 0)
        return api_data[index].fields[field];
      else 
        return '(無內容)'
    } else if (index != null && field == null) {
      return api_data[index];
    }
  }

  function removeInitialState() {
    document.querySelectorAll('.initial').forEach(item => {
      item.classList.remove('initial')
    })

    if (index + 1 === 1)
      document.querySelector('.prev').style.opacity = 0.5
      
    if (index + 1 === api_data.length)
      document.querySelector('.next').style.opacity = 0.5
  }

  const onChangeProductionRerender = () => {
    document.querySelector('.production .container').innerHTML = `
        <div class="title">
          <h2 class="initial">${current_data(index).fields.Product}</h2>
          <h1 class="initial">${current_data(index).fields.Name}</h1>
          <div class="photo initial">
            <img src="${current_data(index).fields.image[0].url}" alt="">
          </div>
        </div>
        <div class="content">
          <div class="pagination">
            <div class="prev">
              <img src="./src/assets/slider_prev.png" alt="">
            </div>
            <span>${index + 1}/${api_data.length}</span>
            <div class="next">
              <img src="./src/assets/slider_next.png" alt="">
            </div>
          </div>
          <div class="text">
            <p>
              <b>Features</b>
              <pre>${current_data(index, 'Features')}</pre>
            </p>
            <p>
              <b>Specification</b>
              <pre>${current_data(index, 'Specification')}</pre>
            </p>
          </div>
        </div>`

    setTimeout(() => {
      removeInitialState()
      this.bindingEvent();
    }, 10)
  }

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
    setTimeout(removeInitialState, 10)
    
    document.querySelector('.icon-close').addEventListener('click', () => {
      app.$router.push('/product-category')
    })        
  }

  this.destroy = function () {
  }

  this.bindingEvent = () => {
    // after render

    document.querySelector('.prev').addEventListener('click', () => {
      if (index + 1 === 1) return;
      index -= 1;
      onChangeProductionRerender();
    })
    document.querySelector('.next').addEventListener('click', () => {
      if (index + 1 === api_data.length) return;
      index += 1;
      onChangeProductionRerender();      
    })
  }

  this.render = () => `
    <div class="production ${ routeHash }">
      <img class="icon-close" src="./src/assets/close-white.png" alt="">
      <div class="background-title initial">
        <img src="${routeToBacktroundTitle[routeHash]}" alt="">
      </div> 
      <div class="container">
        <div class="title">
          <h2 class="initial">${current_data(index).fields.Product}</h2>
          <h1 class="initial">${current_data(index).fields.Name}</h1>
          <div class="photo initial">
            <img src="${current_data(index).fields.image[0].url}" alt="">
          </div>
        </div>
        <div class="content">
          <div class="pagination">
            <div class="prev">
              <img src="./src/assets/slider_prev.png" alt="">
            </div>
            <span>${index + 1}/${api_data.length}</span>
            <div class="next">
              <img src="./src/assets/slider_next.png" alt="">
            </div>
          </div>
          <div class="text">
            <p>
              <b>Features</b>
              <pre>${current_data(index).fields.Features}</pre>
            </p>
            <p>
              <b>Specification</b>
              <pre>${current_data(index).fields.Specification}</pre>
            </p>
          </div>
        </div>
      </div>
    </div>`
}