document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.classList.add('page-visible');

  const goTo = (target) => {
    body.classList.remove('page-visible');
    body.classList.add('page-leaving');
    setTimeout(() => {
      window.location.href = target;
    }, 260);
  };

  document.querySelectorAll('button[data-page]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      goTo(`${button.dataset.page}.html`);
    });
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    const target = link.getAttribute('href');
    if (!target || target.startsWith('#') || target.startsWith('http') || target.startsWith('mailto:')) {
      return;
    }

    link.addEventListener('click', (event) => {
      event.preventDefault();
      goTo(target);
    });
  });
});
