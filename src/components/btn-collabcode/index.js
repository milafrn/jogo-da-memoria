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

  module._validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    const $inputEmail = document.querySelector("#email");
    const $inputPassword = document.querySelector("#password");
    const errors = [];
    const $errorEmail = document.querySelector(".create-error.-email");
    const $errorPassword = document.querySelector('.create-error.-password');

    const $createEmailError = createError.render({
      content: "Email Invalid",
      nameClass: "-email",
    });

    const $createPasswordError = createError.render({
      content: "Password Invalid",
      nameClass: "-password",
    });

    if (!module._validateEmail($inputEmail)) {
      errors.push("Email Invalid");
      if (!$errorEmail) {
        $inputEmail.insertAdjacentHTML("afterend", $createEmailError);
      }
    } else {
      $errorEmail.remove();
    }

    if ($inputPassword.value.length < 8) {
      errors.push("Password Invalid");
      if (!$errorPassword) {
        $inputPassword.insertAdjacentHTML("afterend", $createPasswordError);
      }
    } else {
      $errorPassword.remove();
    }
    

    if (errors === 0) {
      location.hash = `#/${path}`;
      location.reload(true);
    } else {
      console.log(errors);
    }
  };

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
    handleClick: module.handleClick,
  };
})();
