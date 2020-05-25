const eyeCollab = (function () {
  const module = {};

  module._style = (active) => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collab {
        position: absolute;
        right: 0;
        bottom: 20px;
        opacity: 0.3;
      }
      .eye-collab.-active {
        opacity: 1;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = () => {
    const $eyeCollab = document.querySelector(".eye-collab");
    $eyeCollab.classList.toggle("-active");
    inputWrapper.verifyEyeActive();
  };

  module.render = () => {
    module._style();

    return `<img class="eye-collab" src="./img/hidden.png" onClick="eyeCollab.handleClick()">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
  };
})();
