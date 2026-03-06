// Mobile nav toggle — fixed: adds/removes .open class
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('navToggle');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });

  // Close nav when a link is tapped (mobile UX)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});
