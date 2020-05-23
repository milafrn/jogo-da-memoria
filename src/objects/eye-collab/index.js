const eyeCollab = (function (){
  const module = {};

  module._style = active => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .eye-collab {
        position: absolute;
        right: 0;
        bottom: 20px;
        opacity: ${active ? 1 : 0.3};
      }
    `;

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (active = false) => {
    module._style(active);

    return `<img class="eye-collab" src="./img/hidden.png">`;
  }

  return {
    render: module.render,
  }
})();