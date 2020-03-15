function memoryCard() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      display: flex;
      width: 155px;
      height: 155px;
      border-radius: 30px;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
    }
    .memory-card.-front {
      background-color: #fff;
    }
    .memory-card.-back{
      background-color: #f25a70;
    }

    .memory-card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
`;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) => `
    <article class="memory-card ${nameClass} ">
      <img 
      src="${src}" 
      alt='${alt}' 
      class='icon'
      />
    </article>
  `;
}
