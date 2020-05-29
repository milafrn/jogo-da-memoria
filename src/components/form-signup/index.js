const formSignup = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 30px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render({
      placeholder: "marco.bruno.br@gmail.com",
      type: "email",
    });

    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render({
      placeholder: "marcobrunobr",
    });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      placeholder: "********",
      type: "password",
    });

    const $confirmPasswordLabel = labelCollabcode.render("Confirm Password");
    const $confirmPasswordInput = inputCollabcode.render({
      placeholder: "********",
      type: "password",
    });

    const $btn = btnCollabcode.render({ content: "Submit", path: "login" });

    return `
      ${$emailLabel}
      ${$emailInput}
      ${$usernameLabel}
      ${$usernameInput}
      ${$passwordLabel}
      ${$passwordInput}
      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      ${$btn}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render,
  };
})();
