export default function production(app) {
  this.backgroundUrl = './src/assets/background-triangle.png';
  const routeHash = location.hash.split('#/')[1];
  const routeToTitle = {
    'electric-vehicle': 'E-mobility',
    'robotics': 'SmartFactory',
    'patient-monitoring': 'Medical',
  }
  let api_data = window.sinbon.production;
  let index = 0;

  function current_data(index, field) {
    if (index != null && field != null) {
      return api_data[index].fields[field];
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
    document.querySelector('.production .container').innerHTML = renderContainer()

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
    // const fields = current_data(index).fields
    // console.log('render markdown', app.$md.render(fields['Description']));
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
        <img src="./src/assets/background-title-${routeToTitle[routeHash]}.png" alt="">
      </div> 
      <div class="container">
        ${renderContainer()}
      </div>
    </div>`  

  const renderContainer = () => `
    <div class="title" data-id="${current_data(index).id}">
      <h2 class="initial">${current_data(index).fields.Type}</h2>
      <h1 class="initial">${current_data(index).fields.Title}</h1>
      <div class="photo initial">
        <img src="${current_data(index).fields.Image[0].url}" alt="">
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
        ${renderText('Description')}
        ${renderText('Features')}
        ${renderText('Specification')}
        ${renderText('Reliability Requirements')}
      </div>
    </div>`
  
  const renderText = (title) => {
    const fields = current_data(index).fields
    if (title in fields && fields[title].trim().length > 0) {
      console.log(title, fields[title]);
      // description and feature didn't show title
      if (title === 'Description' || title === 'Features') return `
      <section class="${title}-section">
        ${app.$md.render(fields[title])}
      </section>`
      else return `
      <section class="${title}-section">
        <b>${title}</b>
        ${app.$md.render(fields[title])}
      </section>`
    }
    return ''
  }
}