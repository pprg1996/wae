// Mapa responsivo
function ajustarMapa() {
  const mapa = document.querySelector("iframe");
  let ancho = innerWidth - 20 > 560 ? 560 : innerWidth - 20;
  mapa.setAttribute("width", ancho);
}

ajustarMapa();

addEventListener("resize", ajustarMapa);
