const inputWrapper = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .input-wrapper {
        position: relative;
        margin-top: 30px;
      }
    `;

    $head.insertAdjacentElement('beforeend', $style);
  }

  module._children = () => {
    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      placeholder: "********",
      type: "password",
    });
    const $eyeCollab = eyeCollab.render(false);

    return `
      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollab}
    `;
  };

  module.render = () => {
    module._children();
    module._style();

    return `<div class="input-wrapper">${module._children()}</div>`;
  };

  return {
    render: module.render,
  }
})();
