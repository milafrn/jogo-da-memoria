(function () {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);
  
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render('Welcome!');
  
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $dataInput = dataInput.render('Email');
  const $inputWrapper = inputWrapper.render($dataInput);
  
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML('beforeend', $logoWrapper);
  $root.insertAdjacentHTML('beforeend', $inputWrapper);  
})();
