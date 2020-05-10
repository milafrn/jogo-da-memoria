(function () {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render('Log in');
  const $signupButton = flatButton.render('Sign up', true);
  const $logo = logo.render();
  const $title = title.render('Welcome!');


  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML('beforeend', $logo);
  $root.insertAdjacentHTML('beforeend', $title);
})();
