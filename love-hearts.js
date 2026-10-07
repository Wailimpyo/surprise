document.addEventListener('DOMContentLoaded', () => {
  const sky = document.querySelector('.sky-burst');
  if (!sky) return;

  const createSkyObject = () => {
    const object = document.createElement('span');
    const isMoon = Math.random() < 0.35;
    object.className = `sky-particle ${isMoon ? 'moon' : 'star'}`;
    object.textContent = isMoon ? '☾' : '✦';
    object.style.left = `${8 + Math.random() * 84}%`;
    object.style.top = `${8 + Math.random() * 84}%`;
    object.style.animationDelay = `${Math.random() * 0.25}s`;
    sky.appendChild(object);

    setTimeout(() => object.remove(), 1600);
  };

  for (let i = 0; i < 8; i += 1) {
    setTimeout(createSkyObject, i * 220);
  }

  setInterval(() => {
    for (let i = 0; i < 3; i += 1) {
      createSkyObject();
    }
  }, 1000);
});
