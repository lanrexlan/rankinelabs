(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.documentElement.classList.add('reduced-motion');
  }
  var visuals = document.querySelectorAll('.khr-hero-visual');
  visuals.forEach(function (el, i) {
    if (reduce) return;
    el.style.setProperty('--khr-delay', (i * 0.08).toFixed(2) + 's');
    el.classList.add('khr-hero-visual--ready');
  });
})();
