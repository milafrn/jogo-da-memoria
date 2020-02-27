const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
// const $memoryCardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
