

export default function main(appId, initComponent) {
  
  // method
  this.initialFirstPage = (init) => {
    this.components = {
      ...this.components,
      init
    }
  }
  this.use = pkg => {
    pkg.install(this);
  }

  this.component = (registComponent) => {
    this.components[registComponent.name, registComponent]
  };

  this.mounte = (key = 'init') => {

    new Promise(res => {
      if (this.currentComponent != null) {
        if ('destroy' in this.currentComponent) {
          this.appElement.innerHTML = ''
          this.currentComponent.destroy();
        }
        this.currentComponent = null;
      }
      res();
    })
    .then(() => {
      if (key instanceof Function) {
        this.currentComponent = new (key)(this)
      } else {
        // if (typeof key === 'string')
        this.currentComponent = new (this.components[key])(this)
      }
  
      this.appElement.innerHTML = this.currentComponent.render()
    })
    .then(() => { 
      if ('mounted' in this.currentComponent)
        this.currentComponent.mounted();
    })
  };

  
  // data
  this.appElement = document.querySelector(appId);

  // initial first page
  this.initialFirstPage(initComponent)

  this.currentComponent = null;

  return this
}