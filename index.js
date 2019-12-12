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
  document.querySelector(".nav-links").classList.toggle("nav-links--show");
});
