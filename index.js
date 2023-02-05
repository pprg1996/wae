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
document.addEventListener("click", (e) => {
  if (
    e.target.closest(".menu-botton") &&
    !navLinks.classList.contains("nav-links--show")
  ) {
    navLinks.classList.add("nav-links--show");
    menuBotton.querySelector("img").setAttribute("src", "./assets/close.png");
  } else if (
    !e.target.closest(".nav-links") &&
    navLinks.classList.contains("nav-links--show")
  ) {
    navLinks.classList.remove("nav-links--show");
    menuBotton.querySelector("img").setAttribute("src", "./assets/menu.png");
  }
});

// Navegacion
const navButtons = document.querySelectorAll(".nav-link");
navButtons.forEach((navButton) => {
  navButton.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.classList.remove("nav-links--show");
    menuBotton.querySelector("img").setAttribute("src", "./assets/menu.png");

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
    } else if (e.target.innerText === "TOEFL") {
      let y = document.querySelector(".toefl").offsetTop - 85;
      scrollTo(0, y);
    } else if (e.target.innerText === "Contacto") {
      let y = document.querySelector(".contacto").offsetTop - 80;
      scrollTo(0, y);
    }
  });
});

// Active section on nav-links
let linkActivo = 0;
let linkActivoPrev = 0;
document.addEventListener("scroll", () => {
  if (pageYOffset >= 0) linkActivo = 0;
  if (pageYOffset >= document.querySelector(".lista").offsetTop - 105) linkActivo = 1;
  if (pageYOffset >= document.querySelector(".conversacion").offsetTop - 85) linkActivo = 2;
  if (pageYOffset >= document.querySelector(".metodologia").offsetTop - 85) linkActivo = 3;
  if (pageYOffset >= document.querySelector(".toefl").offsetTop - 85)
    linkActivo = 4;
  if (pageYOffset >= document.querySelector(".contacto").offsetTop - 80) linkActivo = 5;

  navButtons.item(linkActivoPrev).classList.remove("nav-link--activo");
  navButtons.item(linkActivo).classList.add("nav-link--activo");
  linkActivoPrev = linkActivo;
});

// Scroll a formulario
document.querySelector(".formulario-cta").addEventListener("click", e => {
  e.preventDefault();

  let y = document.querySelector(".form-clase-examen").getBoundingClientRect().top + pageYOffset - 125;
  scrollTo(0, y);
});
