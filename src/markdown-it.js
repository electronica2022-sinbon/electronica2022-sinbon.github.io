

export default {
  install: function (app) {
    // node.js, "classic" way:
    const md = new markdownit();
    app.$md = md;    
  }
}
