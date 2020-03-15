const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++"
});
const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro da linguagem Javascript",
  nameClass: "-front"
});
const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java",
  nameClass: "-front"
});
const $memoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Ícone de uma mina codando",
  nameClass: "-front"
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

function handleClick() {
  const $memoryCards = document.querySelectorAll(".memory-card");

  for (card of $memoryCards) {
    const image = card.querySelector("img");
    const imageBackup = image.src.toString();

    card.addEventListener("click", function() {
      this.classList.toggle("-back");
      this.classList.toggle("-front");

      if (this.classList.contains("-back")) {
        image.setAttribute("src", "img/icon-collabcode.png");
      } else {
        image.setAttribute("src", imageBackup);
      }
    });
  }
}

handleClick();
