const dataInput = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .data-label {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: #3a40426b;
        width: 302px;
      }
      .data-label > input {
        color: #3a4042;
        font-weight: bold;
        font-size: 18px;
        padding-bottom: 12px;
        padding-top: 12px;
        border: none;
        border-bottom: 1px solid #3a40426b;
      }
    `
    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (label) => {
    module._style();

    return `
      <label class="data-label" for="email">${label} 
        <input type="email" id="email" placeholder="example@email.com">
      </label>
      
    `
  }

  return {
    render: module.render,
  }
})()