const flatButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        background-color: #eae6da;
        color: #fffcee;
        font-size: 24px;
        font-weight: bold;
        width: 186px;
        height: 176px;
        text-transform: uppercase;
      }
      .flat-button.-modify {
        background-color: #f25a70;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return ({ text, nameClass }) =>
      `<button class="flat-button ${nameClass}">${text}</button>`;
  };

  return {
    render: module.render,
  };
})();
