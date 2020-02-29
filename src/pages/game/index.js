const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da CollabCode"
);
const $memoryCardFront = createMemoryCard(
  "img/icon-c.png",
  "Ícone de um livro da linguagem C++",
  "-front"
);
const $cardGueio = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da CollabCode",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardGueio);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
