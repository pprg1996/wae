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
menuBotton.addEventListener("click", () => {
  let navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("nav-links--show");

  if (navLinks.classList.contains("nav-links--show")) {
    menuBotton.querySelector("img").setAttribute("src", "./assets/close.png");
  } else menuBotton.querySelector("img").setAttribute("src", "./assets/menu.png");
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
    } else if (e.target.innerText === "TOELF") {
      let y = document.querySelector(".toelf").offsetTop - 85;
      scrollTo(0, y);
    } else if (e.target.innerText === "Contacto") {
      let y = document.querySelector(".contacto").offsetTop - 80;
      scrollTo(0, y);
    }
  });
});
