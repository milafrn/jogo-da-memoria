const pageLogo = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .wrapper-logo {
        background-color: #fff;
        border-radius: 50%;
        width: 252px;
        height: 252px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .wrapper-logo > .logo {
        width: 171px;
      }     
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };
  module.render = () => {
    module._style();
    return `
      <div class="wrapper-logo">
        <img class="logo" src="../../img/icon-collabcode.png" alt"logo gueio collabcode">
      </div>
    `;
  };
  return {
    render: module.render,
  };
})();
