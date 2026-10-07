document.addEventListener('DOMContentLoaded', () => {
  const skyLayer = document.querySelector('.promise-sky');
  if (!skyLayer) return;

  const floatSkyObject = () => {
    const object = document.createElement('span');
    const isMoon = Math.random() < 0.35;
    object.className = `sky-object ${isMoon ? 'moon' : 'star'}`;
    object.textContent = isMoon ? '☾' : '✦';
    object.style.left = `${8 + Math.random() * 84}%`;
    object.style.top = `${12 + Math.random() * 70}%`;
    object.style.setProperty('--drift', `${(Math.random() - 0.5) * 90}px`);
    object.style.setProperty('--turn', `${(Math.random() - 0.5) * 40}deg`);
    object.style.animationDelay = `${Math.random() * 0.25}s`;
    skyLayer.appendChild(object);

    setTimeout(() => object.remove(), 7600);
  };

  for (let count = 0; count < 7; count += 1) {
    setTimeout(floatSkyObject, count * 260);
  }

  setInterval(() => {
    floatSkyObject();
    floatSkyObject();
  }, 1400);
});
