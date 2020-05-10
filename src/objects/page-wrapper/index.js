const pageWrapper = (function(){
  const module = {}


  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .page-wrapper {
        position: absolute;
        top: 102px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = () => {
    module._style();
    return `
      <div class="page-wrapper"></div>
    `
  }

  return {
    render: module.render,
  }
})()