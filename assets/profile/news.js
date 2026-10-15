const newsToggle = document.querySelector('.news-toggle');
const newsUpdates = document.querySelector('#news-updates');
const newsHint = document.querySelector('#news-hint');
newsToggle.addEventListener('click', () => {
  const expanded = newsToggle.getAttribute('aria-expanded') !== 'true';
  newsToggle.setAttribute('aria-expanded', String(expanded));
  newsUpdates.classList.toggle('is-expanded', expanded);
  newsToggle.textContent = expanded ? 'Show recent updates' : 'Show all updates';
  newsHint.hidden = expanded;
  if (!expanded) newsUpdates.scrollTop = 0;
});
