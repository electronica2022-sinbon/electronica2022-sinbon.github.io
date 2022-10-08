export default function animationBegin(app) {
  this.app = app;
  this.data = {

  }
  this.mounted = () => {
    console.log('mounted');
    this.data.amination = lottie.loadAnimation({
      container: document.getElementById('lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: "./assets/begin.json" // the path to the animation json
    });

    this.data.amination.addEventListener('complete', () => {
      this.destroy()
      this.app.$router.push('nav-page')
    })
  }
  
  this.destroy = () => {
    this.data.amination.destroy();
  }

  this.render = () =>`<div id="lottie"></div>`
}
