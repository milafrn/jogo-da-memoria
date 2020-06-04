const createError = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .create-error {
        font-weight: bold;
        color: #f25a70;
        margin-bottom: 40px;
        margin-top: 5px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({content, nameClass}) => {
    module._style();

    return `<p class="create-error ${nameClass}">${content}</p>`;
  };
  return {
    render: module.render,
  };
})();
