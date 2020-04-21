(function () {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper().$cardsWrapper;

  const createMemoryCard = memoryCard.memoryCard();

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
})();
