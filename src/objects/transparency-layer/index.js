const transparencyLayer = (function () {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");

    $style.textContent = `
      .transparency-layer {
        display: block;
        background-color: rgba(58, 64, 66, 0.5);
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <div class="transparency-layer"></div>
    `;
  };

  return {
    render: module.render,
  };
})();
