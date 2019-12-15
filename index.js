// Mapa responsivo
function ajustarMapa() {
  const mapa = document.querySelector("iframe");
  let ancho = innerWidth - 20 > 560 ? 560 : innerWidth - 20;
  mapa.setAttribute("width", ancho);
}

ajustarMapa();

addEventListener("resize", ajustarMapa);

// Menu hamburguesa
const menuBotton = document.querySelector(".menu-botton");
const navLinks = document.querySelector(".nav-links");
document.addEventListener("click", e => {
  if (e.target.closest(".menu-botton") && !navLinks.classList.contains("nav-links--show")) {
    navLinks.classList.add("nav-links--show");
    menuBotton.querySelector("img").setAttribute("src", "./assets/close.png");
  } else if (!e.target.closest(".nav-links") && navLinks.classList.contains("nav-links--show")) {
    navLinks.classList.remove("nav-links--show");

    menuBotton.querySelector("img").setAttribute("src", "./assets/menu.png");
  }
});

// Navegacion
const navButtons = document.querySelectorAll(".nav-link");
navButtons.forEach(navButton => {
  navButton.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.innerText === "Home") {
      scrollTo(0, 0);
    } else if (e.target.innerText === "Curso y Recuperación Escolar") {
      let y = document.querySelector(".lista").offsetTop - 105;
      scrollTo(0, y);
    } else if (e.target.innerText === "Taller de Conversación") {
      let y = document.querySelector(".conversacion").offsetTop - 85;
      scrollTo(0, y);
    } else if (e.target.innerText === "Metodología") {
      let y = document.querySelector(".metodologia").offsetTop - 85;
      scrollTo(0, y);
    } else if (e.target.innerText === "TOELF") {
      let y = document.querySelector(".toelf").offsetTop - 85;
      scrollTo(0, y);
    } else if (e.target.innerText === "Contacto") {
      let y = document.querySelector(".contacto").offsetTop - 80;
      scrollTo(0, y);
    }
  });
});

// Scroll a formulario
document.querySelector(".formulario-cta").addEventListener("click", e => {
  e.preventDefault();

  let y = document.querySelector(".form-clase-examen").getBoundingClientRect().top + pageYOffset - 125;
  scrollTo(0, y);
});
