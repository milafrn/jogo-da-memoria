const inputCollabcode = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        background-color: #fff;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid rgba(58, 64, 66, 0.5);
        padding-top: 12px;
        padding-bottom: 12px; 
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ id = "", placeholder = "", type = "text" }) => {
    module._style();

    return `<input
    id="${id}" 
    class="input-collabcode" 
    type="${type}" 
    placeholder="${placeholder}">`;
  };

  return {
    render: module.render,
  };
})();
