document.addEventListener('DOMContentLoaded', () => {
  const welcomeButton = document.querySelector('#welcome-button');
  welcomeButton?.addEventListener('click', () => {
    document.body.classList.remove('welcome-pending');
    document.body.classList.add('welcome-revealed');
  });

  const sky = document.querySelector('.sky-burst');
  const heart = document.querySelector('.heart');
  const bouquet = document.querySelector('.bouquet');
  const sunflower = document.querySelector('.sunflower');
  const sunflowerPetals = document.querySelectorAll('.sunflower-petal');
  const cat = document.querySelector('.center-cat');
  const flowers = document.querySelectorAll('.flower');
  const sparks = document.querySelectorAll('.spark');

  const createSkyObject = () => {
    if (!sky) return;
    const object = document.createElement('span');
    const isMoon = Math.random() < 0.28;
    object.className = `sky-particle ${isMoon ? 'moon' : 'star'}`;
    object.textContent = isMoon ? '☾' : '✦';
    object.style.left = `${4 + Math.random() * 92}%`;
    object.style.top = `${6 + Math.random() * 80}%`;
    object.style.animationDelay = `${Math.random() * 0.3}s`;
    sky.appendChild(object);
    setTimeout(() => object.remove(), 1800);
  };

  for (let i = 0; i < 10; i += 1) {
    setTimeout(createSkyObject, i * 180);
  }

  setInterval(() => {
    for (let i = 0; i < 3; i += 1) {
      createSkyObject();
    }
  }, 1000);

  heart?.animate(
    [{ filter: 'drop-shadow(0 0 0 #ff477e)' }, { filter: 'drop-shadow(0 0 22px #fff)' }],
    { duration: 1700, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
  );
  bouquet?.animate(
    [{ transform: 'rotate(-3deg)', filter: 'drop-shadow(0 8px 8px #6b21a855)' }, { transform: 'rotate(3deg)', filter: 'drop-shadow(0 0 22px #fff)' }],
    { duration: 3000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
  );
  sunflower?.animate(
    [{ opacity: 0, transform: 'translateX(-50%) translateY(35px) scale(.65)' }, { opacity: 1, transform: 'translateX(-50%) translateY(0) scale(1)' }],
    { duration: 1100, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.3,1.2)' }
  );
  const growSunflowerPetals = async () => {
    while (true) {
      for (let index = 0; index < sunflowerPetals.length; index += 1) {
        const petal = sunflowerPetals[index];
        const angle = petal.style.getPropertyValue('--angle');
        petal.style.opacity = '1';
        petal.style.transform = `rotate(${angle}) scale(0)`;

        await petal.animate(
          [{ transform: `rotate(${angle}) scale(0)`, opacity: 0 }, { transform: `rotate(${angle}) scale(0.4)`, opacity: 0.55 }, { transform: `rotate(${angle}) scale(1)`, opacity: 1 }],
          { duration: 520, delay: index * 90, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.3,1.2)' }
        ).finished;
      }

      await new Promise((resolve) => setTimeout(resolve, 1400));

      for (let index = sunflowerPetals.length - 1; index >= 0; index -= 1) {
        const petal = sunflowerPetals[index];
        const angle = petal.style.getPropertyValue('--angle');
        await petal.animate(
          [{ transform: `rotate(${angle}) scale(1)`, opacity: 1 }, { transform: `rotate(${angle}) scale(0.25)`, opacity: 0.45 }, { transform: `rotate(${angle}) scale(0)`, opacity: 0 }],
          { duration: 420, delay: (sunflowerPetals.length - 1 - index) * 90, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.3,1.2)' }
        ).finished;
      }

      await new Promise((resolve) => setTimeout(resolve, 350));
    }
  };

  if (sunflowerPetals.length) {
    growSunflowerPetals();
  }
  cat?.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(-5px)' }],
    { duration: 3000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
  );

  flowers.forEach((flower, index) => {
    flower.animate(
      [{ translate: '0 2px', filter: 'brightness(.9)' }, { translate: '0 -2px', filter: 'brightness(1.2) drop-shadow(0 0 12px #ff6f7c)' }],
      { duration: 2200, delay: index * 160, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
    );
  });

  sparks.forEach((spark, index) => {
    const x = [-150, 155, -130, 140, 0][index];
    const y = [-70, -50, 75, 85, -120][index];
    spark.animate(
      [{ transform: 'translate(0)', opacity: 0 }, { transform: 'translate(0)', opacity: 1 }, { transform: `translate(${x}px, ${y}px)`, opacity: 0 }],
      { duration: 2200, delay: index * 300, iterations: Infinity, easing: 'ease-out' }
    );
  });
});
