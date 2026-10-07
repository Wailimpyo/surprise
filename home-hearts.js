document.addEventListener('DOMContentLoaded', () => {
  const layer = document.querySelector('.home-hearts');
  if (!layer) return;

  const createHeart = () => {
    const heart = document.createElement('span');
    heart.className = 'home-heart';
    heart.textContent = Math.random() > 0.5 ? '♥' : '❤';
    heart.style.left = `${32 + Math.random() * 36}%`;
    heart.style.top = `${10 + Math.random() * 45}%`;
    heart.style.setProperty('--x', `${(Math.random() - 0.5) * 90}px`);
    heart.style.setProperty('--y', `${-20 - Math.random() * 80}px`);
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 500);
  };

  setInterval(createHeart, 120);
});
