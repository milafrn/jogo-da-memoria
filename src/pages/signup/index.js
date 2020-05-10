(function () {
  const $root = document.querySelector("#root");

  const createFlatButton = flatButton.render();

  const $loginFlatButton = createFlatButton({
    text: "Log in",
  });
  const $sigupFlatButton = createFlatButton({
    text: "Sign up",
    $nameClass: "-modify",
  });

  $root.insertAdjacentHTML("beforeend", $loginFlatButton);
  $root.insertAdjacentHTML('beforeend', $sigupFlatButton);
})();
