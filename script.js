const servicios = {
  railway: "https://spectacular-mercy-production-f5b2.up.railway.app/",
  vercel: "https://vercel-ejemplo.vercel.app/",
  heroku: "https://heroku-proyect-dee4021d6db2.herokuapp.com/",
  digitalocean: "http://147.182.191.27/",
  openai: "https://platform.openai.com/",
  gmail: "https://mail.google.com/"
};

function abrirServicio(nombre) {
  const url = servicios[nombre];
  window.open(url, "_blank"); 
}