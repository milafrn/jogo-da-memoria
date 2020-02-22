const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $icon = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $iconC = `
  <img 
  src='img/icon-c.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $ball = `<span class="ball"></span>`;

$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("afterbegin", $icon);

$memoryCard2.classList.add("memory-card");
$memoryCard2.classList.add("-modify");
$memoryCard2.insertAdjacentHTML("afterbegin", $ball);
$memoryCard2.insertAdjacentHTML("afterbegin", $iconC);

// $ball.classList.add("ball");

$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCard2, null);
