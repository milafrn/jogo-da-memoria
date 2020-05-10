const pageTitle = (function () {
  const module = {}

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style')
    $style.textContent = `
      .title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: #f25a70;
        text-transform: uppercase;
      }
    `;

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render= (content) =>{
    module._style();
    return `<h1 class="title">${content}</h1>`;
  }

  return {
    render: module.render,
  }
})()