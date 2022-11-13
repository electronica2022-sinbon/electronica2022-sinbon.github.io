// import json from '../assets/begin.json'

export default function caseExample(app) {

  let selectedCaseIndex = null;
  const showContentAfterVideoEnd = () => {
    setTimeout(() => {
      document.querySelectorAll('.hidden').forEach(item => {
        item.classList.add('show')
        item.classList.remove('hidden')
      })
    }, 7500)
  }

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')
    document.querySelector('video').addEventListener('click', () => {
      document.querySelectorAll('.hidden').forEach(item => {
        item.classList.add('show')
        item.classList.remove('hidden')
      })
    })
    showContentAfterVideoEnd()
  }
  
  this.destroy = function () {
  }
 
  
  function thisCase() {
    return window.sinbon.case
  }
  this.bindingEvent = () => {
    document.querySelector('video').addEventListener('loadeddata', (e) => {
      // https://jiepeng.me/2019/03/17/autoplay-policy-note
      e.currentTarget.play()
    })
    
    bindContentOptionEvent();
    bindingReplay();
    // after render
    document.querySelector('.icon-close').addEventListener('click', () => {
      app.$router.push('case-study');
    })
  }

  const rerenderBubble = (index) => {
    console.log('rerenderBubble');
    if (index == null) {
      document.querySelector('div.bubble').innerHTML = ''
      return;
    }
    const solution = thisCase().solutions[index];
    const name = app.$route.name;

    if ('bubble' in solution) {
      document.querySelector('div.bubble').innerHTML =
        solution.bubble.map((src, index) => `<img src="${src}" alt="" class="bubble bubble-${name}-${index + 1}">`).join('')
    }
    else {
      document.querySelector('div.bubble').innerHTML = ''
    }
  }

  const bindContentOptionEvent = () => {
    document.querySelectorAll('.content-option').forEach((option, index) => {
      option.addEventListener('click', () => {
        if (index > 0) {
          selectedCaseIndex = index - 1;
        } else {
          selectedCaseIndex = null; // index === 0
        }

        rerenderCaseOptions(selectedCaseIndex);  // 在這執行 render replay
        rerenderBubble(selectedCaseIndex);
        bindContentOptionEvent();
        bindingReplay(selectedCaseIndex);
      })
    })
  }

  const rerenderCaseOptions = (index) => {
    document.querySelector('.content').innerHTML = `
    <div class="content-options">
      <div class="content-option ${index == null ? 'active' : ''}">Challenge</div>
      ${this.renderCaseOptions(index)}
    </div>
    <div class="content-text">
      ${this.renderContentText(index)}
    </div>`
  }

  this.render = () => `
    <div class="case-example">
      <div class="head">
        <h1 class="title">
          ${thisCase().title}<br />
          <small>${thisCase().sub_title}</small>
        </h1>
        <img class="icon-close" src="./src/assets/close-white.png" alt="">
      </div>
      <div class="container">
        <video muted preload="auto" src="${thisCase().video_url}" autoplay></video>
        <div class="background hidden"></div>
        <div class="content hidden">
          <div class="content-options">
            <div class="content-option ${selectedCaseIndex == null ? 'active' : ''}">Challenge</div>
            ${this.renderCaseOptions(selectedCaseIndex)}
          </div>
          <div class="content-text">
            ${this.renderContentText(selectedCaseIndex)}
          </div>
        </div>
      </div>
      <div class="bubble"></div>
    </div>`
  
  this.renderCaseOptions = (index) => {
    if (thisCase().solutions.length === 1) {
      return `<div class="content-option ${index === 0 ? 'active' : ''}">Solution</div>`
    } else if (thisCase().solutions.length > 1) {
      return thisCase().solutions.map((o, i) => `<div class="content-option ${index === i ? 'active' : ''}">Solution${i+1}</div>`)
    } else {
      return ``
    }
  }

  this.renderContentText = (index) => {
    if (index == null) {
      return `${app.$md.render(thisCase().challenge)}<img class="replay-button" src="./src/assets/button-replay.png" alt="">`
    } else {
      const solution = thisCase().solutions[index];
      if ('features' in solution) {
        return `${app.$md.render(solution.text)}
      <div class="features">
        ${solution.features.map(feature => `<div class="features-item">
        <img src="${feature.icon}" alt="">
        <span>${feature.text}</span></div>`).join('')}
      </div>`
      } else {
        return `${app.$md.render(solution.text)}`
      }
    }
  }

  function bindingReplay(index = null) {
    if (index === null) {
      document.querySelector('.replay-button').addEventListener('click', () => {
        document.querySelectorAll('.show').forEach(item => {
          item.classList.add('hidden');
          item.classList.remove('show');
        });
        document.querySelector('video').play();
        showContentAfterVideoEnd();
      });
    }
  }
}