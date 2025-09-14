
// theme toggle with localStorage
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'light'){ root.classList.add('light'); }
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });
  });
});
