const inputCollabcode = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        background-color: #fff;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid rgba(58, 64, 66, 0.5);
        padding-top: 12px;
        padding-bottom: 12px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (placeholder = "") => {
    module._style();

    return `<input class="input-collabcode" type="email" placeholder="${placeholder}">`
  }

  return {
    render: module.render,
  }
})()