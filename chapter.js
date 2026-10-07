document.addEventListener('DOMContentLoaded', () => {
  const cats = document.querySelectorAll('.cat');

  cats.forEach((cat, index) => {
    setTimeout(() => {
      cat.classList.add('is-visible');
    }, 200 + index * 300);
  });

  let winkIndex = 0;
  const winkCat = () => {
    const cat = cats[winkIndex % cats.length];
    cat.classList.remove('is-winking');
    void cat.offsetWidth;
    cat.classList.add('is-winking');
    setTimeout(() => cat.classList.remove('is-winking'), 3600);
    winkIndex += 1;
    setTimeout(winkCat, 5000);
  };

  if (cats.length) {
    setTimeout(winkCat, 1200);
  }

  const skyObjects = document.querySelectorAll('.sky-float');
  let skyIndex = 0;

  const popSkyObject = () => {
    const skyObject = skyObjects[skyIndex % skyObjects.length];
    skyObject.style.left = `${8 + Math.random() * 84}%`;
    skyObject.style.top = `${8 + Math.random() * 84}%`;
    skyObject.classList.remove('is-popping');
    void skyObject.offsetWidth;
    skyObject.classList.add('is-popping');
    skyIndex += 1;
  };

  if (skyObjects.length) {
    skyObjects.forEach((_, index) => {
      setTimeout(popSkyObject, index * 450);
    });
    setInterval(() => {
      for (let count = 0; count < 3; count += 1) {
        popSkyObject();
      }
    }, 1000);
  }
});
