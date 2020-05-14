(function () {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render('Welcome!');
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $labelUsernameCollabcode = labelCollabcode.render('Username');
  const $inputUsernameCollabcode = inputCollabcode.render();
  const $labelEmailCollabcode = labelCollabcode.render('E-mail');
  const $inputEmailCollabcode = inputCollabcode.render();
  const $labelPasswordCollabcode = labelCollabcode.render('Password');
  const $inputPasswordCollabcode = inputCollabcode.render();
  const $labelConfirmPasswordCollabcode = labelCollabcode.render('Confirm Password');
  const $inputConfirmPasswordCollabcode = inputCollabcode.render();
  
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML('beforeend', $logoWrapper);
  $root.insertAdjacentHTML('beforeend', $labelUsernameCollabcode);
  $root.insertAdjacentHTML('beforeend', $inputUsernameCollabcode);
  $root.insertAdjacentHTML('beforeend', $labelEmailCollabcode);
  $root.insertAdjacentHTML('beforeend', $inputEmailCollabcode);
  $root.insertAdjacentHTML('beforeend', $labelPasswordCollabcode);
  $root.insertAdjacentHTML('beforeend', $inputPasswordCollabcode);
  $root.insertAdjacentHTML('beforeend', $labelConfirmPasswordCollabcode);
  $root.insertAdjacentHTML('beforeend', $inputConfirmPasswordCollabcode);
  
})();
