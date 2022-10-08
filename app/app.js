

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
    if (this.currentComponent != null) {
      if ('destroy' in this.currentComponent) {
        this.currentComponent.destroy();
        this.appElement.innerHTML = ''
      }
      this.currentComponent = null;
    }

    if (key instanceof Function) {
      this.currentComponent = new (key)(this)
    } else {
      // if (typeof key === 'string')
      this.currentComponent = new (this.components[key])(this)
    }

    this.appElement.innerHTML = this.currentComponent.render()

    if ('mounted' in this.currentComponent)
      this.currentComponent.mounted();
  };

  
  // data
  this.appElement = document.querySelector(appId);

  // initial first page
  this.initialFirstPage(initComponent)

  this.currentComponent = null;

  return this
}