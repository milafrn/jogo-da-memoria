const titleCollabcode = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .title-collabcode {
        color: #f25a70;
        font-size: 24px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
      }
    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = content => {
    module._style();

    return `<h1 class="title-collabcode">${content}</h1>`; 
  }


  return {
    render: module.render,
  }
})();