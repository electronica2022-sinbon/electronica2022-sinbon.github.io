export default function caseExample(app) {
  
  // const onChangeProductionRerender = () => {
  //   // document.querySelector('.production .container').innerHTML = renderContainer()

  //   setTimeout(() => {
  //     this.bindingEvent();
  //   }, 10)
  // }

  const showContentAfterVideoEnd = () => {
    setTimeout(() => {
      document.querySelectorAll('.hidden').forEach(item => {
        item.classList.add('show')
        item.classList.remove('hidden')
      })
    }, 8000)
  }

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
    showContentAfterVideoEnd()

    // const fields = current_data(index).fields
    // console.log('render markdown', app.$md.render(fields['Description']));
  }
  
  this.destroy = function () {
  }
  
  this.bindingEvent = () => {
    document.querySelector('video').addEventListener('loadeddata', (e) => {
      // https://jiepeng.me/2019/03/17/autoplay-policy-note
      e.currentTarget.play()
    })
    document.querySelector('.replay-button').addEventListener('click', () => {
      document.querySelectorAll('.show').forEach(item => {
        item.classList.add('hidden')
        item.classList.remove('show')
      })
      document.querySelector('video').play()
      showContentAfterVideoEnd()
    })
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
        <video muted preload="auto" src="./src/video/case1.mp4" autoplay></video>
        <div class="background hidden"></div>
        <div class="content hidden">
          <div class="content-options">
            <div class="content-option active">Challenge</div>
            <div class="content-option">Solution</div>
          </div>
          <div class="content-text">
            The umbilical cable assembly requires the 78-pin plug connector on both ends, and the cable and connectors must serve as
            a sturdy bridge for high-definition cardiac mapping capital equipment.
            <img class="replay-button" src="./src/assets/replay.png" alt="">
          </div>
        </div>
      </div>
    </div>`
}