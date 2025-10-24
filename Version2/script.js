// Activar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});

// Cambiar color de nav al hacer scroll
window.addEventListener("scroll", function() {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
