const formLogin = (function () {
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
    const $usernameLabel = labelCollabcode.render("Username ou e-mail");
    const $usernameInput = inputCollabcode.render({
      placeholder: "marco.bruno.br@gmail.com",
    });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      id: "password",
      placeholder: "8 digite",
      type: "password",
    });

    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forgot password ?",
    });

    const $btn = btnCollabcode.render({ content: "Login", path: "game" });

    return `
      ${$usernameLabel}
      ${$usernameInput}

      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollabcode}

      ${$linkCollab}
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
