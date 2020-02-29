const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da CollabCode"
);
const $memoryCardC = createMemoryCard(
  "img/icon-c.png",
  "Ícone de um livro da linguagem C++",
  "-front"
);

const $memoryCardJs = createMemoryCard(
  "img/-icon-js.png",
  "Ícone de um livro da linguagem Javascript",
  "-front"
);

const $memoryCardBug = createMemoryCard(
  "img/icon-bug.png",
  "Ícone de um bug",
  "-front"
);

const $memoryCardJava = createMemoryCard(
  "img/icon-java.png",
  "Ícone de um livro da linguagem Java",
  "-front"
);

const $memoryCardPhp = createMemoryCard(
  "img/icon-php.png",
  "Ícone de um livro da linguagem Php",
  "-front"
);

const $memoryCardResponsivo = createMemoryCard(
  "img/icon-responsivo.png",
  "Ícone de design responsivo",
  "-front"
);

const $memoryCardWoman = createMemoryCard(
  "img/icon-woman.png",
  "Ícone de uma mulher no computador",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsivo);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
