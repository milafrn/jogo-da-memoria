const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da CollabCode"
});

const $memoryCardC = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJs = createMemoryCard({
  src: "img/-icon-js.png",
  alt: "Ícone de um livro da linguagem Javascript",
  nameClass: "-front"
});

const $memoryCardBug = createMemoryCard({
  src: "img/icon-bug.png",
  alt: "Ícone de um bug",
  nameClass: "-front"
});

const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java",
  nameClass: "-front"
});

const $memoryCardPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Ícone de um livro da linguagem Php",
  nameClass: "-front"
});

const $memoryCardResponsivo = createMemoryCard({
  src: "img/icon-responsivo.png",
  alt: "Ícone de design responsivo",
  nameClass: "-front"
});

const $memoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Ícone de uma mulher no computador",
  nameClass: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsivo);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
