// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Products dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dd) => {
  const btn = dd.querySelector('.dropBtn');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    dropdowns.forEach((d) => {
      d.classList.remove('open');
      d.querySelector('.dropBtn').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      dd.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
document.addEventListener('click', () => {
  dropdowns.forEach((d) => {
    d.classList.remove('open');
    d.querySelector('.dropBtn').setAttribute('aria-expanded', 'false');
  });
});

// Product category filter (products.html only)
const filters = document.getElementById('filters');
const grid = document.getElementById('productGrid');
if (filters && grid) {
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    filters.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    grid.querySelectorAll('.card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
    });
  });
}
