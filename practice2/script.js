const states = document.querySelectorAll('.state');

const overlay = document.getElementById('overlay');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.getElementById('closeBtn');

states.forEach(state => {
  state.addEventListener('mouseenter', () => {
    const imgSrc = state.querySelector('img').src;
    document.body.style.backgroundImage = `url('${imgSrc}')`; // Proper template literal usage with quotes
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.filter = 'none';
  });

  state.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = ''; // Reset the background image
  });

  state.addEventListener('click', () => {
    const imgSrc = state.querySelector('img').src;
    fullImage.src = imgSrc;
    overlay.style.display = 'flex';  
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
