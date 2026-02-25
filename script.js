// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('navToggle');

  if (!btn || !nav) return;

  btn.addEventListener('click', function(){
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      nav.setAttribute('aria-hidden','false');
    } else {
      nav.setAttribute('aria-hidden','true');
    }
  });
});
