export default function caseExample(app) {
  
  // const onChangeProductionRerender = () => {
  //   // document.querySelector('.production .container').innerHTML = renderContainer()

  //   setTimeout(() => {
  //     this.bindingEvent();
  //   }, 10)
  // }

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
    // setTimeout(removeInitialState, 10)

    // const fields = current_data(index).fields
    // console.log('render markdown', app.$md.render(fields['Description']));
  }
  
  this.destroy = function () {
  }
  
  this.bindingEvent = () => {
    // after render
    document.querySelector('.icon-close').addEventListener('click', () => {
      app.$router.push('case-study');
    })
  }

  this.render = () => `
    <div class="case-example">
      <div class="head">
        <h1 class="title">
          Customized Connector Design<br />
          <small>Plug connector and raw cable for cardiac mapping</small>
        </h1>
        <img class="icon-close" src="./src/assets/close-white.png" alt="">
      </div>
      <div class="container">
        <video preload="auto" src="./src/video/case1.mp4" autoplay controls></video>
      </div>
    </div>`
}