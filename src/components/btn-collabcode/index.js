const btnCollabcode = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode {
        height: 48px;
        border-radius: 24px;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #f25a70;
        width: 100%;
        cursor: pointer;
      }
      .input-collabcode + .btn-collabcode {
        margin-top: 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    window.location.hash = `#/${path}`;
  }

  module.render = ({ content = "", path = "" }) => {
    module._style();

    return `
      <input 
        class="btn-collabcode" 
        type="submit" value="${content}"
        onclick="btnCollabcode.handleClick(event, '${path}')">
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
