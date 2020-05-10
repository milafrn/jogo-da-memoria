(function () {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render('Log in');
  const $signupButton = flatButton.render('Sign up', true);
  const $logo = logo.render();


  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML('beforeend', $logo);
})();
