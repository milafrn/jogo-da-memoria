const starterGame = (function () {
  const module = {};

  module.create = () => {
    return `
      <button class="start">Start</button>
    `;
  };
  return {
    create: module.create,
  };
})();
