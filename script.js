const servicios = {
  railway: "https://spectacular-mercy-production-f5b2.up.railway.app/",
  vercel: "https://vercel-ejemplo.vercel.app/",
  heroku: "https://herokulis-0a22c78650c7.herokuapp.com/",
  digitalocean: "https://practice-app-i8b6c.ondigitalocean.app/",
  openai: "https://platform.openai.com/",
  gmail: "https://mail.google.com/"
};

function abrirServicio(nombre) {
  const url = servicios[nombre];
  window.open(url, "_blank"); 
}