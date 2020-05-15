const btnCollabcode = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .btn-collabcode {
        height: 48px;
        border-radius: 24px;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #f25a70;
        width: 100%;
        cursor: pointer;
      }
      .input-collabcode + .btn-collabcode {
        margin-top: 40px;
      }
    `;

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = content => {
    module._style();

    return `
      <input class="btn-collabcode" type="submit" value="${content}">
    `
  }

  return {
    render: module.render,
  }
})();