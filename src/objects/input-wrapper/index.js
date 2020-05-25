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
      nameClass: '-password',
    });
    const $eyeCollab = eyeCollab.render();

    return `
      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollab}
    `;
  };

  module.verifyEyeActive = () => {
    const $passwordInput = document.querySelector('.input-collabcode.-password');
    const $eyeCollab = document.querySelector('.eye-collab');
    if($eyeCollab.classList.contains('-active')){
      $passwordInput.setAttribute('type', "text");
    } else if(!$eyeCollab.classList.contains('-active')){
      $passwordInput.setAttribute('type', "password");
    }
  }

  module.render = () => {
    module._children();
    module._style();

    return `<div class="input-wrapper">${module._children()}</div>`;
  };

  return {
    render: module.render,
    verifyEyeActive: module.verifyEyeActive
  }
})();
