const menuOpen = document.getElementById('menu-opener');
const menu = document.querySelector('.menu-js');
const close = document.querySelector('.x');
const closelink = document.querySelectorAll('.link');

menuOpen.addEventListener('click', () => {
  menu.style.display = 'block';
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
});

closelink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
