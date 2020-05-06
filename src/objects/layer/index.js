const layer = (function (){
  const module = {}

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style')

    $style.textContent = `
      .layer {
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 100%;
        background-color: #5a5a5a;
        opacity: 0.5;
      }
      .layer.-inative {
        display: none;
      }
    `
    $head.insertBefore($style, null);
  }

  module.render = () => {
    module._style();

    return `
    <div class="layer"></div>
    `
  }
  return {
    layer: module.render,
  }
})();