const starterGame = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .start {
        width: 100px;
        height: 100px;
        border: none;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 35%;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
      <button class="start">Start</button>
    `;
  };
  return {
    create: module.create,
  };
})();
