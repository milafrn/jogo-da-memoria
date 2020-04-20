let qtdActiveMemoryCard = 0;

function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .cards-wrapper {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
  }
  
  .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }
  `;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active")
      .length;
  });

  return $cardsWrapper;
}
