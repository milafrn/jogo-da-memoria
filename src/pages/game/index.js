const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++",
});
const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro da linguagem Javascript",
});
const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java",
});
const $memoryCardWoman = createMemoryCard({
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

const $memoryCards = $cardsWrapper.querySelectorAll(".memory-card");
for (let card of $memoryCards) {
  card.addEventListener("click", () => {
    const $memoryCardsActive = $cardsWrapper.querySelectorAll(".-active");
    verifyCardActive($memoryCardsActive);
    cardBlocked($memoryCardsActive, $memoryCards);
  });
}

function verifyCardActive($memoryCardsActive) {
  if ($memoryCardsActive.length == 2) {
    setTimeout(() => {
      for (let cardActive of $memoryCardsActive) {
        cardActive.classList.remove("-active");
      }
    }, 3000);
  }
}

function cardBlocked($memoryCardsActive, $memoryCards) {
  if ($memoryCardsActive.length == 2) {
    for (let card of $memoryCards) {
      card.style.pointerEvents = "none";
      setTimeout(() => {
        card.style.pointerEvents = "auto";
      }, 3000);
    }
  }
}
