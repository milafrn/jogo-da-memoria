const memoryCard = (function () {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .memory-card{
      width: 155px;
      height: 155px;
      position: relative;
    }
    .memory-card .card {
      width: 100%;
      height: 100%;
      display: flex;
      width: 155px;
      height: 155px;
      border-radius: 30px;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      position: absolute;
      cursor: pointer;
      background-color: #f25a70;
    }

    .memory-card.-active .card,
    .memory-card.-score .card {
      display: none;
    }

    .memory-card.-active .card.-front, 
    .memory-card.-score .card.-front {
      display: flex;
    }

    .card.-front {
      background-color: #fff;
    }


    .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .card > .icon {
      width: 100px;
      height: 100px;
    }

    .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
`;

    $head.insertBefore($style, null);

    return ({ src, alt, nameClass }) => `
    <div class="memory-card" onClick="memoryCard.handleClick(this)">
      <article class="card -front">
        <img 
        src="${src}" 
        alt='${alt}' 
        class='icon'
        />
      </article>
      <article class="card">
        <img 
        src="img/icon-collabcode.png" 
        alt='O mascote da Collabcode o gueio' 
        class='icon'
        />
      </article>
    </div>
  `;
  };

  module.handleClick = ($component) => {
    if (!$component.classList.contains("-active")) {
      module._activeMemoryCard($component);
      module._checkSure();
      const $number = document.querySelector(".number");

      $number.innerHTML = store.score;
    }
  };

  module._activeMemoryCard = ($component) => {
    if (store.qtdActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
  };

  module._checkSure = () => {
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
        document.querySelector('.point-bar > .number').textContent = store.score;
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
  };

  return {
    create: module.create,
    handleClick: module.handleClick,
  };
})();
