export default function handler(req, res) {
  const phone = process.env.MY_PHONE_NUMBER; 
  const message = encodeURIComponent("Selam! Jestini beğendim, kahve teklifini kabul ediyorum. 😊");

  if (!phone) {
    return res.status(500).send("Konfigürasyon eksik.");
  }

  res.redirect(302, `https://wa.me/${phone}?text=${message}`);
}
