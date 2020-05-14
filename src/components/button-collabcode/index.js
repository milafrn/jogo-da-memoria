const buttonCollabcode = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .button-collabcode {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        background-color: #f25a70;
        width: 302px;
        height: 48px;
        border-radius: 24px;
        text-transform: uppercase;
      }
    `;

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = content => {
    module._style();

    return `<button class="button-collabcode">${content}</button`
  };

  return {
    render: module.render,
  }
})();