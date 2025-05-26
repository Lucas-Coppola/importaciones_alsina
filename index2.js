// Scroll: cambia estilo del navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navContainer");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Acordeón
const items = document.querySelectorAll('.acordeon-item');
items.forEach(item => {
  const btn = item.querySelector('.acordeon-titulo');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Seleccionamos el botón del menú y el nav
const menuBtn = document.getElementById('hamburger');
const navBar = document.querySelector('.navBar');
const btnNav = document.querySelectorAll('.btnNav')

// Alternamos la clase 'active' al hacer clic
menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

menuBtn.addEventListener('click', () => {
  navBar.classList.add('scrolled');
})

btnNav.forEach(btn => {
  btn.addEventListener('click', () => {
    navBar.classList.remove('active');
    document.body.classList.toggle('no-scroll')
  });
});

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll');
});