document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const cards = [...document.querySelectorAll('.article-card')];
  const filters = [...document.querySelectorAll('.filter')];
  const search = document.getElementById('searchInput');
  const empty = document.getElementById('emptyState');
  let category = 'All';
  function applyFilters() {
    const term = (search?.value || '').toLowerCase().trim();
    let visible = 0;
    cards.forEach(card => {
      const matchesCategory = category === 'All' || card.dataset.category === category;
      const matchesTerm = !term || (card.dataset.search + ' ' + card.textContent).toLowerCase().includes(term);
      const show = matchesCategory && matchesTerm;
      card.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  }
  filters.forEach(btn => btn.addEventListener('click', () => {
    category = btn.dataset.filter;
    filters.forEach(item => item.classList.toggle('active', item === btn));
    applyFilters();
  }));
  search?.addEventListener('input', applyFilters);
  document.querySelectorAll('.topic-strip a[data-filter]').forEach(link => link.addEventListener('click', () => {
    category = link.dataset.filter;
    filters.forEach(item => item.classList.toggle('active', item.dataset.filter === category));
    applyFilters();
  }));

  const newsletter = document.getElementById('newsletterForm');
  newsletter?.addEventListener('submit', event => {
    event.preventDefault();
    const message = document.getElementById('newsletterMessage');
    if (message) message.textContent = 'Thanks! This demo form is not connected to an email list yet.';
  });

  const contact = document.getElementById('contactForm');
  contact?.addEventListener('submit', event => {
    event.preventDefault();
    const msg = document.getElementById('contactMessage');
    if (msg) msg.textContent = 'This demo form is not connected yet. Add a form backend before publishing.';
  });
});
