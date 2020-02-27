const createMemoryCard = () => {
  const $memoryCard = `
    <article class="memory-card">
      <img 
      src='img/icon-collabcode.png' 
      alt='gueio mascote da CollabCode' 
      class='icon'
      />
    </article>
  `;

  return $memoryCard;
};

const createMemoryCardFront = () => {
  const $memoryCard = `
    <article class="memory-card -front">
      <img 
      src='img/icon-c.png' 
      alt='gueio mascote da CollabCode' 
      class='icon'
      onClick="handleClick()"
      />
    </article>
  `;

  return $memoryCard;
};

function handleClick() {
  console.log;
}
