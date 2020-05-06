const gameButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .game-button {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ed573;
        border: 3px solid #fffcee;
        color: #fffcee;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.05em;
        cursor: pointer;
        box-shadow: 0px 5px 8px #3a4042;
        transition: opacity 1000ms linear 0.2s, transform 1ms linear 0.8s;
      }
      .game-button.-inative {
        opacity: 0;
        transform: translateX(-99999px);
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <button class="game-button">Start</button>
    `;
  };

  module.handleClick = () => {
    const $gameButton = document.querySelector('.game-button');
    const $layer = document.querySelector('.layer');
    $gameButton.addEventListener('click', () => {
      $gameButton.classList.add('-inative')
      $layer.classList.add('-inative');
    })
  }

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
