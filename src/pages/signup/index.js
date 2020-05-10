(function () {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  const $pageWrapper = pageWrapper.render();

  const $pageLogo = pageLogo.render();
  const $pageTitle = pageTitle.render("Welcome!");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $pageWrapper);

  const $selectPageWrapper = $root.querySelector(".page-wrapper");

  $selectPageWrapper.insertAdjacentHTML("beforeend", $pageLogo);
  $selectPageWrapper.insertAdjacentHTML("beforeend", $pageTitle);
})();
