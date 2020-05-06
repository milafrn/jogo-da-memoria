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
        transform: translateX(0);
        transition: opacity 1000ms linear 0.8s, transform 1ms linear 1.5s;
      }
      .layer.-inative {
        opacity: 0;
        transform: translateX(-99999px);
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