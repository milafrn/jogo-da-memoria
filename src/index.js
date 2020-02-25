const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");
const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");
const $memoryCard7 = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $icon = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $icon2 = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $icon3 = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $icon4 = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $icon5 = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $icon6 = `
  <img 
  src='img/icon-collabcode.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;
const $icon7 = `
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

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCard2.classList.add("memory-card");
$root.insertBefore($memoryCard2, null);

$memoryCard3.classList.add("memory-card");
$root.insertBefore($memoryCard3, null);

$memoryCard4.classList.add("memory-card");
$root.insertBefore($memoryCard4, null);

$memoryCard5.classList.add("memory-card");
$root.insertBefore($memoryCard5, null);

$memoryCard6.classList.add("memory-card");
$root.insertBefore($memoryCard6, null);

$memoryCard7.classList.add("memory-card");
$root.insertBefore($memoryCard7, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCard2.insertAdjacentHTML("afterbegin", $icon2);
$memoryCard3.insertAdjacentHTML("afterbegin", $icon3);
$memoryCard4.insertAdjacentHTML("afterbegin", $icon4);
$memoryCard5.insertAdjacentHTML("afterbegin", $icon5);
$memoryCard6.insertAdjacentHTML("afterbegin", $icon6);
$memoryCard7.insertAdjacentHTML("afterbegin", $icon7);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
