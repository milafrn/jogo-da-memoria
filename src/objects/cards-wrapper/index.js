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
    store.qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(
      ".memory-card.-active"
    ).length;
  });

  function checkSure() {
    if (store.qtdActiveMemoryCard == 1) {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );

      if (
        $activeMemoryCards[0]
          .querySelector(".-front .icon")
          .getAttribute("src") ===
        $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        store.score++;
        console.log("Score:", store.score);
        $activeMemoryCards.forEach(($memoryCard) => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-active");
        });
      } else {
        setTimeout(() => {
          $activeMemoryCards.forEach(($memoryCard) => {
            $memoryCard.classList.remove("-active");
          });
          store.qtdActiveMemoryCard = 0;
        }, 1500);
      }
    }
  }

  return {
    $cardsWrapper,
    checkSure,
  };
}
