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
