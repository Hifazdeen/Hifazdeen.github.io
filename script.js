// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

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
