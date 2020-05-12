const inputWrapper = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .input-wrapper {
        display: flex;
        justify-content: center;
      }
    `
    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (...content) => {
    module._style();

    return `
      <div class="input-wrapper">${content.join('')}</div>
    `
  }

  return {
    render: module.render,
  }
})()