const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({
  nameCard: "card-C",
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++",
});
const $memoryCardJS = createMemoryCard({
  nameCard: "card-Js",
  src: "img/icon-js.png",
  alt: "Ícone de um livro da linguagem Javascript",
});
const $memoryCardJava = createMemoryCard({
  nameCard: "card-Java",
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java",
});
const $memoryCardWoman = createMemoryCard({
  nameCard: "card-Woman",
  src: "img/icon-woman.png",
  alt: "Ícone de uma mina codando",
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
