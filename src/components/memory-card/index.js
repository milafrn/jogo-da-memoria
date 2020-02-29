const createMemoryCard = ({ src, alt, nameClass }) => `
    <article class="memory-card ${nameClass}">
      <img 
      src="${src}" 
      alt='${alt}' 
      class='icon'
      onClick="handleclick()"
      />
    </article>
  `;

const handleClick = () => console.log("ae");
