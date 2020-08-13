const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('open');
}

close.addEventListener('click', toggleMenu);

open.addEventListener('click', toggleMenu);

document.querySelector('.menu-sider')
  .addEventListener('click', () => {
    menu.classList.remove('open');
  });

// document.addEventListener('click', function(event) {
//   if (!menu.classList.contains('open')) return;

//   const closestMenu = event.target.closest('.menu');
//   if (!closestMenu) toggleMenu();
// }, true);

