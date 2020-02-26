function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
      <img 
      src='img/icon-collabcode.png' 
      alt='gueio mascote da CollabCode' 
      class='icon'
      />
      `;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

  $memoryCard.addEventListener("click", () => {
    console.log("ae");
  });
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconC = `
  <img 
  src='img/icon-c.png' 
  alt='gueio mascote da CollabCode' 
  class='icon'
  />
  `;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);

  $memoryCardFront.addEventListener("click", () => {
    console.log("Front");
  });
}
