// import animation from 

// TODO: 23143
window.onload = function () {
  const animationBegin = lottie.loadAnimation({
    container: document.getElementById('lottie'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: "./assets/begin.json" // the path to the animation json
  });

  animationBegin.addEventListener('complete', function () {
    animationBegin.destroy();
    document.querySelector('.nav-page').classList.toggle('display-none');
    setTimeout(() => {
      document.querySelectorAll('.main-nav-item').forEach(item => {
        item.classList.toggle('scale0-to-origin')
      })
    })
  })
}