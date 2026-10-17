export default function handler(req, res) {
  const phone = "905396261750";
  const message = encodeURIComponent("Selam! Web siteni gördüm, kahve teklifini kabul ediyorum. 😊");

  if (!phone) {
    return res.status(500).send("Konfigürasyon eksik.");
  }

  // Tarayıcıyı doğrudan WhatsApp'a yönlendirir (302 Redirect)
  res.redirect(302, `https://wa.me/${phone}?text=${message}`);
}
