// Lightweight procedural star placement
(function initStars() {
  const starsContainer = document.getElementById('stars');
  const count = 110; // number of stars
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    // Random position
    const x = Math.random() * vw;
    const y = Math.random() * vh;
    // Random size
    const size = Math.random() * 2 + 1;
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    // Random animation delay
    s.style.animationDelay = (Math.random() * 6) + 's';
    starsContainer.appendChild(s);
  }
})();

(function initSnow() {
  const snow = document.getElementById('snow');
  const flakes = 120;
  const vw = window.innerWidth;

  for (let i = 0; i < flakes; i++) {
    const f = document.createElement('div');
    f.className = 'snowflake';
    const size = Math.random() * 6 + 2; // 2 - 8 px
    f.style.width = size + 'px';
    f.style.height = size + 'px';
    f.style.borderRadius = '50%';
    // Horizontal drift
    const dx = (Math.random() * 60 - 30) + 'px';
    f.style.setProperty('--dx', dx);
    // Position and animation timing
    f.style.left = Math.random() * vw + 'px';
    f.style.animationDuration = (Math.random() * 6 + 4) + 's';
    f.style.animationDelay = (Math.random() * 6) + 's';
    snow.appendChild(f);
  }
})();

// Optional: Add basic Enter click behavior (navigate to dummy section or animate)
(function attachEnterBehavior() {
  const btn = document.getElementById('enterBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    // Simple visual feedback; in a real site you might redirect to a catalog or next section.
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    btn.style.transform = 'scale(0.98)';
    btn.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
    setTimeout(() => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    }, 320);
  });
})();
