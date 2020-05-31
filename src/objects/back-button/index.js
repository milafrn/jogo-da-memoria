const backButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .back-button {
        cursor: pointer;
        pointer-events: all;
        padding: 0;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 25px;
        left: 10px;
        width: 40px;
        height: 30px;
        background: transparent;
      }
      .back-button > span {
        width: 25px;
        border-radius: 1px;
        height: 5px;
        background: #fff;
      }
      .back-button > span:nth-child(1) {
        transform: translate(-2px, 3px) rotate(-45deg);
      }
      .back-button > span:nth-child(2) {
        width: 40px;
      }
      .back-button > span:nth-child(3) {
        transform: translate(-2px, -3px) rotate(45deg);
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (path) => {
    location.hash = `#/${path}`;
    location.reload(true);
    return;
  }

  module.render = ({path = ""}) => {
    module._style();
    return `
      <button class="back-button" onclick="backButton.handleClick('${path}')">
        <span></span>
        <span></span>
        <span></span>
      </button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
