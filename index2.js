window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navContainer");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const items = document.querySelectorAll('.acordeon-item');
items.forEach(item => {
  const btn = item.querySelector('.acordeon-titulo');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
